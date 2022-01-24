import csv
import json

cn = {}

with open('countries_codes_and_coordinates.csv') as csvfile:
    countries = csv.DictReader(csvfile, quotechar='"', delimiter=',', skipinitialspace=True)
    for country in countries:
        cn[country['Alpha-2 code']] = country

print(json.dumps(cn))
