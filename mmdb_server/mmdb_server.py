#!/usr/bin/env python3
#
# mmdb-server is an open source fast API server to lookup IP addresses for their geographic location.
#
# The server is released under the AGPL version 3 or later.
#
# Copyright (C) 2022-2025 Alexandre Dulaunoy

import configparser
import time
from ipaddress import ip_address
import json
from pathlib import Path
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
web_ui = config['global'].getboolean('web_ui', fallback=True)
# Public address of this instance (e.g. https://ip.circl.lu/), shown in the
# commands and API reference of the web interface. Empty: the address the
# visitor used to open the page.
public_url = config['global'].get('public_url', fallback='').strip().rstrip('/')

web_dir = Path(__file__).resolve().parent / 'web'

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


def geoLookup(ip: str) -> list:
    ret = []
    for mmdb in mmdbs:
        georesult = mmdb['reader'].get(ip)
        if georesult is None:
            # Address not covered by the database (multicast, reserved...)
            georesult = {'country': {'iso_code': 'None'}}
        m = mmdb.copy()
        del m['reader']
        georesult['meta'] = m
        georesult['ip'] = ip
        if georesult['country']['iso_code'] != 'None':
            georesult['country_info'] = countryLookup(country=georesult['country']['iso_code'])
        else:
            georesult['country_info'] = {}
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
        resp.media = geoLookup(value)
        return


class MyGeoLookup:
    def on_get(self, req, resp):
        ips = req.access_route
        resp.media = geoLookup(ips[0])
        return

class MyRawLookup:
    def on_get(self, req, resp):
        ips = req.access_route
        resp.text = ips[0]
        return
    def on_head(self, req, resp):
        ips = req.access_route
        resp.append_header('X-IP', ips[0])


class Meta:
    def on_get(self, req, resp):
        ret = []
        for mmdb in mmdbs:
            m = mmdb.copy()
            del m['reader']
            ret.append(m)
        resp.media = {'version': version, 'public_url': public_url or None, 'databases': ret}


# The web interface loads nothing from other sites: every script, style,
# font, image and data file is served from /web/static.
CSP = '; '.join([
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self'",
    "img-src 'self' data:",
    "connect-src 'self'",
    "font-src 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "frame-ancestors 'none'",
])


class SecurityHeaders:
    """Headers sent with every response (API, page and static files)."""

    def process_response(self, req, resp, resource, req_succeeded):
        resp.set_header('X-Content-Type-Options', 'nosniff')
        resp.set_header('Referrer-Policy', 'no-referrer')
        if req.path == '/web' or req.path.startswith('/web/'):
            resp.set_header('Content-Security-Policy', CSP)
            resp.set_header('X-Frame-Options', 'DENY')


class WebInterface:
    # The page uses relative links, so it must be served from /web/
    # (also behind a reverse proxy that adds a path prefix).
    def on_get(self, req, resp):
        if not req.path.endswith('/'):
            raise falcon.HTTPMovedPermanently(req.path.rsplit('/', 1)[-1] + '/')
        resp.content_type = falcon.MEDIA_HTML
        resp.text = (web_dir / 'index.html').read_text(encoding='utf-8')


app = falcon.App(middleware=[SecurityHeaders()])

app.add_route('/geolookup/{value}', GeoLookup())
app.add_route('/', MyGeoLookup())
app.add_route('/raw', MyRawLookup())
app.add_route('/meta', Meta())

if web_ui:
    app.add_route('/web', WebInterface())
    app.add_route('/web/', WebInterface())
    app.add_static_route('/web/static', str(web_dir / 'static'))

def main():
    with make_server('', port, app) as httpd:
        print(f'Serving on port {port}...')
        httpd.serve_forever()


if __name__ == '__main__':
    main()

