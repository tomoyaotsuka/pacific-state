#!/bin/sh
# $1: src path
# $2: dist path
src=${1:src}
dist=${2:dist}
env=${3:development}

# Compile scss to css
if [ "$env" = "development" ]; then
  node-sass $src/styles/app.scss $dist/styles/bundle.css \
    --output-style compressed \
    --source-map-contents true \
    --source-map-embed true \
    --importer node_modules/node-sass-globbing/index.js
else
  node-sass $src/styles/app.scss $dist/styles/bundle.css \
  --output-style compressed \
  --importer node_modules/node-sass-globbing/index.js
fi

# Set prefix
postcss $dist/styles/bundle.css \
  -o $dist/styles/bundle.css \
  --config conf/postcss.config.js
