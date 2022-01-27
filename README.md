# mmdb-server

mmdb-server is an open source fast API server to lookup IP addresses for their geographic location. The server can be used with any [MaxMind DB File Format](https://maxmind.github.io/MaxMind-DB/) or file in the same format.

mmdb-server includes a free and open [GeoOpen-Country database](https://data.public.lu/fr/datasets/geo-open-ip-address-geolocation-per-country-in-mmdb-format/) for IPv4 and IPv6 addresses. The file GeoOpen-Country is generated on a regular basis from AS announces and their respective whois records.

# Installation

Python 3.8+ is required to run the mmdb-server with some [additional requirements](./REQUIREMENTS).

- `pip3 install -r REQUIREMENTS`
- `cp ./etc/server.conf.sample ./etc/server.conf`
- `cd bin; python3 server.py`

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
      "build_db": "2022-01-23 16:13:05",
      "db_source": "GeoOpen-Country",
      "nb_nodes": 1156125
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
      "build_db": "2022-01-23 16:13:05",
      "db_source": "GeoOpen-Country",
      "nb_nodes": 1156125
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

# License

```
    Copyright (C) 2022 Alexandre Dulaunoy 

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
