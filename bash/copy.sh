#!/bin/sh
dist=${1:dist}

cpx 'src/assets/**/*' $dist
cpx 'src/images/common/favicon.ico' $dist