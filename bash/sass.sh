#!/bin/sh

# Compile scss to css
node-sass src/styles/app.scss dist/bundle.css --output-style compressed

# Set prefix
postcss dist/bundle.css -o dist/bundle.css -c conf/postcssrc.config.json
