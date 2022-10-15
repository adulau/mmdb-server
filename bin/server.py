#!/usr/bin/env python3
#
# mmdb-server is an open source fast API server to lookup IP addresses for their geographic location.
#
# The server is released under the AGPL version 3 or later.
#
# Copyright (C) 2022 Alexandre Dulaunoy

import configparser
import time
from ipaddress import ip_address
import json
from wsgiref.simple_server import make_server

import falcon
import maxminddb

version = "0.5"
config = configparser.ConfigParser()
config.read('../etc/server.conf')
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


class GeoLookup:
    def on_get(self, req, resp, value):
        ret = []
        ua = req.get_header('User-Agent')
        ips = req.access_route
        if not validIPAddress(value):
            resp.status = falcon.HTTP_422
            resp.media = "IPv4 or IPv6 address is in an incorrect format. Dotted decimal for IPv4 or textual representation for IPv6 are required."
            return
        pubLookup(value=f'{value} via {ips} using {ua}')
        for mmdb in mmdbs:
            m = {}
            georesult = mmdb['reader'].get(value)
            m = mmdb.copy()
            del m['reader']
            georesult['meta'] = m
            georesult['ip'] = value
            if georesult['country']['iso_code'] != 'None':
                georesult['country_info'] = countryLookup(country=georesult['country']['iso_code'])
            else:
                georesult['country_info'] = {}
            ret.append(georesult)
        resp.media = ret
        return


class MyGeoLookup:
    def on_get(self, req, resp):
        ret = []
        ips = req.access_route
        for mmdb in mmdbs:
            m = {}
            georesult = mmdb['reader'].get(ips[0])
            m = mmdb.copy()
            del m['reader']
            georesult['meta'] = m
            georesult['ip'] = ips[0]
            if georesult['country']['iso_code'] != 'None':
                georesult['country_info'] = countryLookup(country=georesult['country']['iso_code'])
            else:
                georesult['country_info'] = {}
            ret.append(georesult)
        resp.media = ret
        return


app = falcon.App()

app.add_route('/geolookup/{value}', GeoLookup())
app.add_route('/', MyGeoLookup())

if __name__ == '__main__':
    with make_server('', port, app) as httpd:
        print(f'Serving on port {port}...')
        httpd.serve_forever()
