#!/bin/sh
glob 'src/images/**/*.{png,jpg,gif,svg}' | node ./bash/imagemin.js -v -o ${1:dist}