#!/bin/sh
imagemin dist/images/**/*.{jpg,png} --out-dir=dist/images --plugin=pngquant --plugin=jpegtran
