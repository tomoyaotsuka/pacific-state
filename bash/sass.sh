#!/bin/sh

# Compile scss to css
node-sass src/styles/app.scss dist/bundle.css --output-style compressed --importer node_modules/node-sass-globbing/index.js

# Set prefix
postcss dist/bundle.css -o dist/bundle.css -c conf/postcss.config.json
