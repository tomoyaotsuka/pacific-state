#!/bin/sh
src=${1:src}
dist=${2:dist}
env=${3:development}

# npm-run-all -p \
chokidar "$src/templates/**/*.pug" --command "sh bash/pug.sh $src $dist $env" &
# chokidar "$src/**/**/*.pug" --silent -c 'if [ "{event}" = "change" ]; then echo {path}; fi;'
chokidar "$src/styles/**/*.scss" --command "sh bash/sass.sh $src $dist $env" &
chokidar "$src/scripts/**/*.js" --command "sh bash/webpack.sh $env" &
# chokidar "$src/scripts/**/*.scss" --command "sh bash/webpack.sh $env" &
webpack-dev-server --config conf/webpack.config.js --mode $env &
chokidar "$src/assets/**/*" --command "npm run copy"