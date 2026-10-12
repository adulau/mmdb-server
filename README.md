# mmdb-server

mmdb-server is an open source fast API server to lookup IP addresses for their geographic location, AS number. The server can be used with any [MaxMind DB File Format](https://maxmind.github.io/MaxMind-DB/) or file in the same format.

mmdb-server includes a free and open [GeoOpen-Country database](https://data.public.lu/fr/datasets/geo-open-ip-address-geolocation-per-country-in-mmdb-format/) for IPv4 and IPv6 addresses. The file [GeoOpen-Country](https://cra.circl.lu/opendata/geo-open/mmdb-country/) and [GeoOpen-Country-ASN](https://cra.circl.lu/opendata/geo-open/mmdb-country-asn/) are generated on a regular basis from AS announces and their respective whois records.

# Installation

## Classic

Python 3.10+ is required to run the mmdb-server with poetry.

- `curl -sSL https://install.python-poetry.org | python3 -`
- Log out and Log in again
- `poetry install`
- `cp ./etc/server.conf.sample ./etc/server.conf`
- `cd  ./db; bash update.sh; cd ..` (to get the latest version of the GeoOpen database)
- `poetry run serve`

## Docker

- `docker build -t mmdb-server:latest .`
- `docker run -d -p 8000:8000 --name mmdb-server mmdb-server:latest`

# Usage

## Lookup of an IP address

`curl -s http://127.0.0.1:8000/geolookup/188.65.220.25 | jq .`

```json
[
  {
    "country": {
      "iso_code": "BE"
    },
    "meta": {
      "description": {
        "en": "Geo Open MMDB database - https://github.com/adulau/mmdb-server"
      },
      "build_db": "2022-02-05 11:37:33",
      "db_source": "GeoOpen-Country",
      "nb_nodes": 1159974
    },
    "ip": "188.65.220.25",
    "country_info": {
      "Country": "Belgium",
      "Alpha-2 code": "BE",
      "Alpha-3 code": "BEL",
      "Numeric code": "56",
      "Latitude (average)": "50.8333",
      "Longitude (average)": "4"
    }
  },
  {
    "country": {
      "iso_code": "BE",
      "AutonomousSystemNumber": "49677",
      "AutonomousSystemOrganization": "MAEHDROS-AS"
    },
    "meta": {
      "description": {
        "en": "Geo Open MMDB database - https://github.com/adulau/mmdb-server"
      },
      "build_db": "2022-02-06 10:30:25",
      "db_source": "GeoOpen-Country-ASN",
      "nb_nodes": 1159815
    },
    "ip": "188.65.220.25",
    "country_info": {
      "Country": "Belgium",
      "Alpha-2 code": "BE",
      "Alpha-3 code": "BEL",
      "Numeric code": "56",
      "Latitude (average)": "50.8333",
      "Longitude (average)": "4"
    }
  }
]
```

`$ curl -s http://127.0.0.1:8000/geolookup/2a02:21d0::68:69:25 | jq .`

```json
[
  {
    "country": {
      "iso_code": "BE"
    },
    "meta": {
      "description": {
        "en": "Geo Open MMDB database - https://github.com/adulau/mmdb-server"
      },
      "build_db": "2022-02-05 11:37:33",
      "db_source": "GeoOpen-Country",
      "nb_nodes": 1159974
    },
    "ip": "2a02:21d0::68:69:25",
    "country_info": {
      "Country": "Belgium",
      "Alpha-2 code": "BE",
      "Alpha-3 code": "BEL",
      "Numeric code": "56",
      "Latitude (average)": "50.8333",
      "Longitude (average)": "4"
    }
  },
  {
    "country": {
      "iso_code": "BE",
      "AutonomousSystemNumber": "49677",
      "AutonomousSystemOrganization": "MAEHDROS-AS"
    },
    "meta": {
      "description": {
        "en": "Geo Open MMDB database - https://github.com/adulau/mmdb-server"
      },
      "build_db": "2022-02-06 10:30:25",
      "db_source": "GeoOpen-Country-ASN",
      "nb_nodes": 1159815
    },
    "ip": "2a02:21d0::68:69:25",
    "country_info": {
      "Country": "Belgium",
      "Alpha-2 code": "BE",
      "Alpha-3 code": "BEL",
      "Numeric code": "56",
      "Latitude (average)": "50.8333",
      "Longitude (average)": "4"
    }
  }
]
```

# Output format

The output format is an array of JSON object (to support the ability to serve multiple geo location database).  Each JSON object of the JSON array includes a `meta`, `country`, `ip` and `country_info` fields. The `country` give the geographic location of the IP address queried. The `meta` field includes the origin of the MMDB database which the the metadata. `ip` returns the queried IP address. `country_info` gives additional information about the country such as `Country`, `Alpha-2 code`, `Alpha-3 code`, `Numeric code`, Latitude and Longitude (average centric value).

# Public online version of mmdb-server

- [https://ip.circl.lu/](https://ip.circl.lu/) - lookup via [https://ip.circl.lu/geolookup/8.8.8.8](https://ip.circl.lu/geolookup/8.8.8.8)
- [https://ipv4.circl.lu](https://ipv4.circl.lu/) If you are dual-homed IPv6/IPv4, return your IPv4 address. 
- [https://ipv6.circl.lu](https://ipv6.circl.lu/) If you are dual-homed IPv6/IPv4, return your IPv6 address. 

## If you want the source raw IP without any geolookup details

- [https://ip.circl.lu/raw](https://ip.circl.lu/raw)

# License

```
    Copyright (C) 2022-2025 Alexandre Dulaunoy

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

# Fork additions (bikramj/mmdb-server)

This fork adds two things to upstream mmdb-server:

- **ipinfo databases** — serve the daily-refreshed
  [ipinfo free country + ASN database](https://ipinfo.io/products/free-ip-database)
  (or any other MMDB file) instead of the GeoOpen files committed in `db/`.
- **`/cidr` export endpoints** — all networks of a country or an ASN as a
  collapsed CIDR list, ready to use as an HAProxy or Apache ACL.

## Serving the ipinfo database

`etc/server.conf` takes one or more MMDB files (comma-separated, relative to
the working directory or absolute); each file contributes one element to the
JSON array, in the order listed:

~~~ini
[global]
mmdb_file = /opt/ipinfo-db/country_asn.mmdb
country_file = db/country.json
lookup_pubsub = no
port = 8000
~~~

ipinfo rebuilds the file daily. Download it and restart the server so the
new file is loaded (a restart also clears the `/cidr` cache):

~~~bash
curl -sSL --fail --retry 3 -o /opt/ipinfo-db/country_asn.mmdb.tmp \
  "https://ipinfo.io/data/free/country_asn.mmdb?token=$IPINFO_TOKEN" \
  && mv /opt/ipinfo-db/country_asn.mmdb.tmp /opt/ipinfo-db/country_asn.mmdb \
  && systemctl restart mmdb-server
~~~

## Usage examples

All examples assume the server listens on `127.0.0.1:8000`.

### IP lookup — `GET /geolookup/{ip}`

~~~bash
curl -s http://127.0.0.1:8000/geolookup/128.100.100.128 | jq .
~~~

With the ipinfo database the record is flat (`country`, `country_name`,
`continent`, `continent_name`, `asn`, `as_name`, `as_domain`):

~~~json
[
  {
    "as_domain": "utoronto.ca",
    "as_name": "University of Toronto",
    "asn": "AS239",
    "continent": "NA",
    "continent_name": "North America",
    "country": "CA",
    "country_name": "Canada",
    "meta": {
      "description": { "en": "ipinfo generic_country_free_country_asn.mmdb" },
      "build_db": "2026-09-09 04:04:41",
      "db_source": "ipinfo generic_country_free_country_asn.mmdb",
      "nb_nodes": 2049115
    },
    "ip": "128.100.100.128",
    "country_info": {
      "Country": "Canada",
      "Alpha-2 code": "CA",
      "Alpha-3 code": "CAN",
      "Numeric code": "124",
      "Latitude (average)": "60",
      "Longitude (average)": "-95"
    }
  }
]
~~~

IPv6 works the same way: `curl -s http://127.0.0.1:8000/geolookup/2606:fa00::1`

Pick out fields with `jq`:

~~~bash
# "Canada | University of Toronto"
curl -s http://127.0.0.1:8000/geolookup/128.100.100.128 \
  | jq -r '.[0] | "\(.country_name) | \(.as_name)"'

# country code only
curl -s http://127.0.0.1:8000/geolookup/8.8.8.8 | jq -r '.[0].country'
~~~

(With the GeoOpen databases the same values live under `.country.iso_code`
and `.country.AutonomousSystemNumber` — see the upstream examples above.)

A malformed address is a `422`:

~~~
$ curl -s -w ' -> %{http_code}\n' http://127.0.0.1:8000/geolookup/not-an-ip
"IPv4 or IPv6 address is in an incorrect format. Dotted decimal for IPv4 or textual representation for IPv6 are required." -> 422
~~~

### The caller's own address — `GET /` and `GET /raw`

~~~bash
curl -s http://127.0.0.1:8000/ | jq .              # full lookup of the caller's IP
curl -s http://127.0.0.1:8000/raw                  # just the IP, as text
curl -sI http://127.0.0.1:8000/raw | grep -i x-ip  # HEAD: the IP in an X-IP header
~~~

Behind a reverse proxy the caller's address is taken from `X-Forwarded-For`
(Falcon's `access_route`), so treat these two endpoints as informational.

### All networks of a country — `GET /cidr/country/{cc}`

~~~bash
curl -s --retry 10 --retry-delay 5 http://127.0.0.1:8000/cidr/country/CA
~~~

~~~
# country CA - 8174 IPv4 ranges - GeoOpen-Country-ASN (build 2025-12-03 04:21:34)
2.22.72.0/22
5.44.16.0/20
...
~~~

The first request for a key answers `503` with `Retry-After: 5` while the
database is scanned in the background (a few seconds); `curl --retry` honours
that header and returns the real answer. Later requests for the same key are
served from cache until the server restarts.

IPv4 only by default. `?family=6` gives the IPv6 prefixes and `?family=all`
both; the family is applied when the response is built, so switching is free
once the key is cached:

~~~bash
curl -s "http://127.0.0.1:8000/cidr/country/CA?family=6"
# country CA - 1358 IPv6 ranges - GeoOpen-Country-ASN (build 2025-12-03 04:21:34)
# 2001:410::/32
# ...
curl -s "http://127.0.0.1:8000/cidr/country/CA?family=all"
~~~

The same list in the other formats (`family` combines with `format`):

~~~bash
# Apache: one "Require ip" line per network
curl -s --retry 10 --retry-delay 5 "http://127.0.0.1:8000/cidr/country/CA?format=apache"

# JSON: {query, family, count, source, cidrs[]}
curl -s --retry 10 --retry-delay 5 "http://127.0.0.1:8000/cidr/country/CA?format=json&family=all" \
  | jq '{family, count, source, first: .cidrs[0]}'
~~~

Country codes are case-insensitive (`/cidr/country/ca`). A code that is not
in `country.json` is a `404` right away; anything that is not two letters is
a `422`.

### All networks of an ASN — `GET /cidr/asn/{asn}`

~~~bash
curl -s --retry 10 --retry-delay 5 http://127.0.0.1:8000/cidr/asn/AS239   # or /cidr/asn/239
~~~

~~~
# AS239 - 8 IPv4 ranges - GeoOpen-Country-ASN (build 2025-12-03 04:21:34)
128.100.0.0/16
138.51.0.0/16
142.1.0.0/16
...
~~~

`?family=` and `?format=` work here too. A non-numeric ASN is a `422`; an
ASN with no networks in the requested family is a `404` (after the scan).

### Feeding an HAProxy ACL

~~~bash
#!/bin/bash
# refresh-ca-list.sh — run from cron after the daily database refresh
set -e
new=$(mktemp)
# IPv4 only by default; add ?family=all for a dual-stack frontend
curl -sf --retry 10 --retry-delay 5 -o "$new" http://127.0.0.1:8000/cidr/country/CA
# refuse a suspiciously short list and keep the last known-good file
[ "$(grep -c / "$new")" -ge 5000 ] || { echo "CA list too short, keeping the old one"; exit 1; }
install -m 0644 "$new" /etc/haproxy/ca.lst
systemctl reload haproxy
~~~

~~~
# haproxy.cfg — '#' comment lines in the file are fine
acl from_canada src -f /etc/haproxy/ca.lst
http-request deny if { path_beg /canada-only } !from_canada
~~~

### Feeding an Apache access rule

~~~bash
curl -sf --retry 10 --retry-delay 5 -o /etc/apache2/ca-require.conf \
  "http://127.0.0.1:8000/cidr/country/CA?format=apache"
~~~

~~~apache
<Location /canada-only>
  <RequireAny>
    Include /etc/apache2/ca-require.conf
  </RequireAny>
</Location>
~~~

### Health check

~~~bash
curl -sf http://127.0.0.1:8000/geolookup/8.8.8.8 > /dev/null && echo up
~~~

## How `/cidr` works

Nothing is indexed at startup. The first request for a country or ASN scans
the database in a background thread (a few seconds; requires
`maxminddb >= 2.5`) and answers `503 Retry-After` — retry, e.g.
`curl --retry 10 --retry-delay 5 ...` — and the result is cached until the
service restarts. Only the requested key's networks are kept, so memory
stays flat and the lookup endpoints are never blocked. IPv4 is returned by
default (`?family=6` for IPv6, `?family=all` for both); adjacent prefixes
are collapsed. Consumers fetching ACL files should sanity-check the result
(e.g. minimum line count) before deploying it.
