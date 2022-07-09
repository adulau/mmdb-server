#!/bin/sh

wget https://cra.circl.lu/opendata/geo-open/mmdb-country/latest.mmdb
mv latest.mmdb GeoOpen-Country.mmdb
wget https://cra.circl.lu/opendata/geo-open/mmdb-country-asn/latest.mmdb
mv latest.mmdb GeoOpen-Country-ASN.mmdb
