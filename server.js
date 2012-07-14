#!/usr/bin/env node
var express = require('express');
var app = express.createServer();
var conf = require('config');

var builder = require('./core/builder');
var base = builder
  .conf(conf)
  .app(express, app)
  .modules(conf.modules)
  .build();

base.app.listen(conf.server.port);
