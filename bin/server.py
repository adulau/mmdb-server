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

version = "0.1"
config = configparser.ConfigParser()
config.read('../etc/server.conf')
mmdb_file = config['global'].get('mmdb_file')
pubsub = config['global'].getboolean('lookup_pubsub')
port = config['global'].getint('port')
country_file = config['global'].get('country_file')

with open(country_file) as j:
    country_info = json.load(j)

if pubsub:
    import redis
    rdb = redis.Redis(host='127.0.0.1')

meta = {}
q = maxminddb.open_database(mmdb_file, maxminddb.MODE_MEMORY)
meta['description'] = q.metadata().description
meta['build_db'] = time.strftime(
    '%Y-%m-%d %H:%M:%S', time.localtime(q.metadata().build_epoch)
)
meta['db_source'] = q.metadata().database_type
meta['nb_nodes'] = q.metadata().node_count


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
    if country != 'None' or country is not None:
        return country_info[country]
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
        georesult = q.get(value)
        ret.append(georesult)
        georesult['meta'] = meta
        georesult['ip'] = value
        if georesult['country']['iso_code'] != 'None':
            georesult['country_info'] = countryLookup(country=georesult['country']['iso_code'])
        else:
            georesult['country_info'] = {}
        resp.media = ret
        return


class MyGeoLookup:
    def on_get(self, req, resp):
        ret = []
        ips = req.access_route
        georesult = q.get(ips[0])
        ret.append(georesult)
        georesult['meta'] = meta
        georesult['ip'] = ips[0]
        if georesult['country']['iso_code'] != 'None':
            georesult['country_info'] = countryLookup(country=georesult['country']['iso_code'])
        else:
            georesult['country_info'] = {}
        resp.media = ret
        return


app = falcon.App()

app.add_route('/geolookup/{value}', GeoLookup())
app.add_route('/', MyGeoLookup())

if __name__ == '__main__':
    with make_server('', port, app) as httpd:
        print(f'Serving on port {port}...')
        httpd.serve_forever()
