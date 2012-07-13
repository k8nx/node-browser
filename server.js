#!/usr/bin/env node
var express = require('express');
var app = express.createServer();
var conf = require('config');

var builder = require('./core/builder');
var base = builder
  .app(express, app)
  .build();

base.app.listen(conf.server.port);
