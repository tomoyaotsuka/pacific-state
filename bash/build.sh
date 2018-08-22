#!/bin/sh
src=${1:src}
dist=${2:dist}
env=${3:development}

npm run clean

sh bash/pug.sh $src $dist $env
sh bash/sass.sh $src $dist $env
sh bash/webpack.sh $env
# spritesmith --rc=./conf/spritesmith.config.js

npm run minify
npm run copy