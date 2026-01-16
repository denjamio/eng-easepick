#!/usr/bin/env bash

mkdir -p node_modules/@eng-easepick

RPATH=`pwd`

for FOLDER in packages/*; do
  if [ -d "$FOLDER" ]; then
    NAME=$(basename $FOLDER)
    ln -s $RPATH/$FOLDER node_modules/@eng-easepick/$NAME
  fi
done
