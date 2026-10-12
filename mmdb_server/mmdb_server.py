#!/usr/bin/env python3
#
# mmdb-server is an open source fast API server to lookup IP addresses for their geographic location.
#
# The server is released under the AGPL version 3 or later.
#
# Copyright (C) 2022-2025 Alexandre Dulaunoy

import configparser
import sys
import threading
import time
from ipaddress import collapse_addresses, ip_address
import json
from wsgiref.simple_server import make_server

import falcon
import maxminddb

version = "0.6"
config = configparser.ConfigParser()
config.read('etc/server.conf')
mmdb_file = config['global'].get('mmdb_file')
pubsub = config['global'].getboolean('lookup_pubsub')
port = config['global'].getint('port')
country_file = config['global'].get('country_file')

mmdb_files = mmdb_file.split(",")

with open(country_file) as j:
    country_info = json.load(j)

if pubsub:
    import redis

    rdb = redis.Redis(host='127.0.0.1')

mmdbs = []
for mmdb_file in mmdb_files:
    meta = {}
    meta['reader'] = maxminddb.open_database(mmdb_file, maxminddb.MODE_MEMORY)
    meta['description'] = meta['reader'].metadata().description
    meta['build_db'] = time.strftime(
        '%Y-%m-%d %H:%M:%S', time.localtime(meta['reader'].metadata().build_epoch)
    )
    meta['db_source'] = meta['reader'].metadata().database_type
    meta['nb_nodes'] = meta['reader'].metadata().node_count
    mmdbs.append(meta)


def validIPAddress(IP: str) -> bool:
    try:
        type(ip_address(IP))
        return True
    except ValueError:
        return False


def pubLookup(value: str) -> bool:
    if not pubsub:
        return False
    rdb.publish('mmdb-server::lookup', f'{value}')
    return True


def countryLookup(country: str) -> dict:
    if country != 'None' or country is not None or country != 'Unknown':
        if country in country_info:
            return country_info[country]
        else:
            return {}
    else:
        return {}


def _process_lookup(ip):
    """Helper function to process IP lookup and format response."""
    ret = []
    for mmdb in mmdbs:
        georesult = mmdb['reader'].get(ip) or {}  # Ensure dictionary, prevent NoneType errors
        m = mmdb.copy()
        del m['reader']
        georesult['meta'] = m
        georesult['ip'] = ip

        # Determine country code from old or new format
        country_code = None
        if isinstance(georesult.get('country'), dict):
            country_code = georesult['country'].get('iso_code')
        elif isinstance(georesult.get('country'), str):
            country_code = georesult['country']

        georesult['country_info'] = countryLookup(country_code) if country_code else {}
        ret.append(georesult)
    return ret


class GeoLookup:
    def on_get(self, req, resp, value):
        ua = req.get_header('User-Agent')
        ips = req.access_route
        if not validIPAddress(value):
            resp.status = falcon.HTTP_422
            resp.media = "IPv4 or IPv6 address is in an incorrect format. Dotted decimal for IPv4 or textual representation for IPv6 are required."
            return
        pubLookup(value=f'{value} via {ips} using {ua}')
        resp.media = _process_lookup(value)


class MyGeoLookup:
    def on_get(self, req, resp):
        ips = req.access_route
        resp.media = _process_lookup(ips[0])

class MyRawLookup:
    def on_get(self, req, resp):
        ips = req.access_route
        resp.text = ips[0]
        return
    def on_head(self, req, resp):
        ips = req.access_route
        resp.append_header('X-IP', ips[0])

class CIDRExport:
    """Shared logic for the /cidr endpoints: the collapsed CIDR list of one
    country or ASN, produced by scanning the database on demand.

    Nothing is indexed at startup. The first request for a key starts a scan
    in a daemon thread and answers 503 Retry-After; only that key's networks
    are kept, so memory stays flat, and the result is cached for the life of
    the process (the daily database refresh restarts the service). The hot
    lookup endpoints are never blocked.
    """

    results = {}  # (kind, key) -> (v4, v6, source); empty lists = no networks
    pending = set()
    lock = threading.Lock()
    scan_lock = threading.Lock()  # one scan at a time

    @staticmethod
    def record_key(record, kind):
        if not isinstance(record, dict):
            return None
        country = record.get('country')
        if kind == 'country':
            if isinstance(country, dict):  # MaxMind GeoIP2 / GeoOpen format
                return country.get('iso_code')
            return country
        asn = record.get('asn')  # ipinfo: 'AS577'
        if asn is None:
            asn = record.get('autonomous_system_number')  # MaxMind ASN database
        if asn is None and isinstance(country, dict):
            asn = country.get('AutonomousSystemNumber')  # GeoOpen-Country-ASN
        if asn is None:
            return None
        asn = str(asn).upper()
        return asn if asn.startswith('AS') else 'AS' + asn

    @classmethod
    def collect(cls, kind, key):
        networks = []
        source = ''
        for path, mmdb in zip(mmdb_files, mmdbs):
            has_kind = False
            # A separate mmap reader (C extension when available) leaves the
            # in-memory readers serving lookups untouched.
            with maxminddb.open_database(path, maxminddb.MODE_AUTO) as reader:
                for network, record in reader:
                    k = cls.record_key(record, kind)
                    if k is None:
                        continue
                    has_kind = True
                    if k == key:
                        networks.append(network)
            if has_kind:
                # first database carrying this kind of data wins
                source = f"{mmdb['db_source']} (build {mmdb['build_db']})"
                break
        v4 = collapse_addresses(n for n in networks if n.version == 4)
        v6 = collapse_addresses(n for n in networks if n.version == 6)
        return [str(n) for n in v4], [str(n) for n in v6], source

    @classmethod
    def scan(cls, kind, key):
        try:
            with cls.scan_lock:
                result = cls.collect(kind, key)
            with cls.lock:
                cls.results[(kind, key)] = result
        except Exception as e:  # a failed scan is simply retried by the next request
            print(f'CIDR scan for {kind} {key} failed: {e}', file=sys.stderr)
        finally:
            with cls.lock:
                cls.pending.discard((kind, key))

    @classmethod
    def lookup(cls, kind, key):
        """Cached (v4, v6, source) for key, or None while its scan runs."""
        with cls.lock:
            cached = cls.results.get((kind, key))
            if cached is None and (kind, key) not in cls.pending:
                cls.pending.add((kind, key))
                threading.Thread(target=cls.scan, args=(kind, key), daemon=True).start()
            return cached

    FAMILIES = {'4': 'IPv4', '6': 'IPv6', 'all': 'IPv4+IPv6'}

    def respond(self, req, resp, kind, key, label):
        family = req.get_param('family', default='4').lower()
        if family not in self.FAMILIES:
            resp.status = falcon.HTTP_422
            resp.media = 'family must be 4 (default), 6 or all.'
            return
        found = self.lookup(kind, key)
        if found is None:
            resp.status = falcon.HTTP_503
            resp.append_header('Retry-After', '5')
            resp.media = f'Scanning the database for {label}, retry shortly.'
            return
        v4, v6, source = found
        cidrs = {'4': v4, '6': v6, 'all': v4 + v6}[family]
        family_label = self.FAMILIES[family]
        if not cidrs:
            resp.status = falcon.HTTP_404
            resp.media = f'No {family_label} networks found for {label}.'
            return
        fmt = req.get_param('format', default='plain').lower()
        header = f"# {label} - {len(cidrs)} {family_label} ranges - {source}"
        if fmt == 'json':
            resp.media = {
                'query': label,
                'family': family_label,
                'count': len(cidrs),
                'source': source,
                'cidrs': cidrs,
            }
        elif fmt == 'apache':
            resp.content_type = falcon.MEDIA_TEXT
            resp.text = header + '\n' + '\n'.join(f'Require ip {c}' for c in cidrs) + '\n'
        else:
            # plain: one CIDR per line — directly usable as an HAProxy acl
            # file (src -f <file>); '#' comment lines are allowed there.
            resp.content_type = falcon.MEDIA_TEXT
            resp.text = header + '\n' + '\n'.join(cidrs) + '\n'


class CountryCIDR(CIDRExport):
    def on_get(self, req, resp, country):
        cc = country.strip().upper()
        if len(cc) != 2 or not cc.isalpha():
            resp.status = falcon.HTTP_422
            resp.media = 'Country must be a two-letter ISO code, e.g. CA.'
            return
        if cc not in country_info:
            # unknown code: answer without spending a database scan on it
            resp.status = falcon.HTTP_404
            resp.media = f'Unknown country code {cc}.'
            return
        self.respond(req, resp, 'country', cc, f'country {cc}')


class ASNCIDR(CIDRExport):
    def on_get(self, req, resp, asn):
        a = asn.strip().upper()
        if a.startswith('AS'):
            a = a[2:]
        if not a.isdigit():
            resp.status = falcon.HTTP_422
            resp.media = 'ASN must be numeric, e.g. AS577 or 577.'
            return
        self.respond(req, resp, 'asn', 'AS' + a, f'AS{a}')


app = falcon.App()

app.add_route('/geolookup/{value}', GeoLookup())
app.add_route('/', MyGeoLookup())
app.add_route('/raw', MyRawLookup())
app.add_route('/cidr/country/{country}', CountryCIDR())
app.add_route('/cidr/asn/{asn}', ASNCIDR())


def main():
    with make_server('', port, app) as httpd:
        print(f'Serving on port {port}...')
        httpd.serve_forever()


if __name__ == '__main__':
    main()