#!/bin/sh

set -u

download_and_replace() {
  url="$1"
  target="$2"
  tmp="${target}.tmp"

  echo "[INFO] Downloading $url -> $target"

  if wget --progress=dot:giga --tries=3 -O "$tmp" "$url"; then
    echo "[OK] Download successful, replacing $target"
    mv -f "$tmp" "$target"
    echo "[OK] Updated $target"
  else
    echo "[WARN] Download failed for $url, keeping existing $target"
    rm -f "$tmp"
    return 1
  fi
}

download_and_replace \
  "https://cra.circl.lu/opendata/geo-open/mmdb-country/latest.mmdb" \
  "GeoOpen-Country.mmdb"

download_and_replace \
  "https://cra.circl.lu/opendata/geo-open/mmdb-country-asn/latest.mmdb" \
  "GeoOpen-Country-ASN.mmdb"
