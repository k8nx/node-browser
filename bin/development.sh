#!/bin/sh
DIR=`dirname $0`
HOME=`cd $DIR/..; pwd`
NODE_ENV=development node $HOME/server.js
