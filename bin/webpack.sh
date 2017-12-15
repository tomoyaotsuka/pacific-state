#!/bin/sh

# $1 : 環境変数
# $2 : 監視オプション
NODE_ENV=${1:-DEV} webpack --progress --colors $2
