#! /bin/bash

JS_PATH=/home/acs/acapp/game/static/js/
JS_PATH_DIST=${JS_PATH}dist/
JS_PATH_SRC=${JS_PATH}src/

find ${JS_PATH_SRC} -type f -name '*.js' | sort | xargs awk 'FNR==1 && NR!=1{print ""}1' > ${JS_PATH_DIST}game.js

# 添加错误处理
if [ $? -ne 0 ]; then
    echo "Error: Failed to compress game.js"
    exit 1
fi