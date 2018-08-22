#!/bin/sh
# $1: 環境変数

# NODE_ENV=${1:-development} webpack --progress --colors --config conf/webpack.config.js
webpack --mode ${1:-development} --progress --colors --config conf/webpack.config.js
