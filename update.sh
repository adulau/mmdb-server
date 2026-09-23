#!/bin/sh

set -u

download_and_replace() {
  url="$1"
  target="$2"
  tmp="${target}.tmp"

  echo "[INFO] Downloading $url -> $target"

  if curl \
    --fail \
    --location \
    --retry 3 \
    --retry-delay 2 \
    --show-error \
    --output "$tmp" \
    "$url"; then

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
  "db/GeoOpen-Country.mmdb"

download_and_replace \
  "https://cra.circl.lu/opendata/geo-open/mmdb-country-asn/latest.mmdb" \
  "db/GeoOpen-Country-ASN.mmdb"

