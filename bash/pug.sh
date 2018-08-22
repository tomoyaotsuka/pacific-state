#!/bin/sh
# $1: src path
# $2: dist path
# $3: 環境変数

# Generate json for ENV
echo '{ "ENV": "'${3:-development}'" }' > data/env.json

# Minify json
json-minify data/site.json > data/site.min.json

# Merge json files
json-merge data/env.json data/site.min.json > data/data.json

#Removde minify json
rimraf data/site.min.json

# Compile pug
if [ "$3" = "development" ]; then
  pug ${1:-src}/templates --out ${2:-dist} --obj data/data.json --pretty
else
  pug ${1:-src}/templates --out ${2:-dist} --obj data/data.json
fi
