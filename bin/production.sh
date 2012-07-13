#!/bin/sh
DIR=`dirname $0`
HOME=`cd $DIR/..; pwd`
NODE_ENV=production node $HOME/server.js
