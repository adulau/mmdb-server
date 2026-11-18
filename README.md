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

# Web interface

Once the server runs, open **http://127.0.0.1:8000/web/** in a browser. No extra installation is needed: the page and everything it uses are in `mmdb_server/web/` and are served by mmdb-server itself.

- **Lookup**: the country and autonomous system of an address, shown on a flat map or a 3D globe, with the answer of each database, the raw JSON and the matching `curl` command. Your own address is looked up only when you click **My address**.
- **Bulk**: paste a list of addresses or any text (logs, e-mail headers). The IPv4 and IPv6 addresses in it are found, defanged ones too (`192.0.2[.]1`), deduplicated and looked up (up to 1000). The results are shown as a table you can search and export as CSV, with a map and a ranking of the countries.
- **API**: the API reference (OpenAPI 3.1, `mmdb_server/web/static/openapi.json`).
- **About**: how the data is built, what a result means, and the licences of every component.

## Configuration

In `etc/server.conf`, section `[global]`:

```ini
# Serve the web interface on /web/ (default: yes)
web_ui = yes
# Public address of this instance, used in the curl commands and the API
# reference shown by the page (e.g. https://ip.circl.lu). Empty: the
# address the visitor opened the page with.
public_url =
```

Set `public_url` on a public instance: the page then always shows its public name, never an internal address or port of the machine behind the reverse proxy.

With `web_ui = no` only the JSON API is served. The API is unchanged by the web interface; one endpoint was added: `GET /meta` returns the server version, the `public_url` and the loaded databases.

The page only uses relative links, so it also works behind a reverse proxy that serves mmdb-server under a path prefix (for example `https://example.org/ip/web/`).

## Security and privacy

- The page loads nothing from another site: no CDN, no web font service, no analytics. Scripts, styles, fonts, icons, flags and map shapes are pinned copies in `mmdb_server/web/static/vendor/`.
- Responses from `/web/` carry a strict `Content-Security-Policy` (`'self'` only, no inline script), `X-Frame-Options: DENY`, `Referrer-Policy: no-referrer` and `X-Content-Type-Options: nosniff`. Every API response carries the last two.
- Data from the API is always inserted in the page as text, never as HTML. The CSV export escapes cells that start with `=`, `+`, `-` or `@`.

## Third-party components

| Component | Version | Folder in `static/vendor/` | Licence |
|---|---|---|---|
| [Vitrine](https://github.com/ecrou-exact/vitrine) | 0.14.0 | `vitrine/` | MIT |
| [Leaflet](https://leafletjs.com/) | 1.9.4 | `leaflet/` | BSD-2-Clause |
| d3-geo, d3-array | 3.1.1, 3.2.4 | `d3/` | ISC |
| topojson-client | 3.1.0 | `topojson-client/` | ISC |
| world-atlas ([Natural Earth](https://www.naturalearthdata.com/)) | 2.0.2 | `world-atlas/` | ISC, public domain data |
| [flag-icons](https://github.com/lipis/flag-icons) | 7.2.3 | `flag-icons/` | MIT |
| Font Awesome Free | 6.5.2 | `fontawesome/` | CC BY 4.0, OFL 1.1, MIT |
| Space Grotesk, IBM Plex Sans, JetBrains Mono (Fontsource) | 5.1.0 | `fonts/` | OFL 1.1 |

Each folder holds the licence file of the component. For Vitrine, only the loader and the modules of the four components used (`vt-code`, `vt-json`, `vt-table`, `vt-openapi`) are kept, with their shared chunks. The npm packages were used as the source (`npm pack <name>@<version>`); Vitrine comes from its `v0.14.0` release. To update a component, replace its folder with the files of the new version and change the version in this table and on the About page.

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
