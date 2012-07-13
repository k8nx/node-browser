var redis = require('redis');
var instances = {};

exports.createClient = function(port, host, db) {
  host = host || '127.0.0.1';
  db = db || '0';
  var pair = host+':'+port+':'+db;
  if (instances[pair] == null) {
    instances[pair] = redis.createClient(port, host);
    instances[pair].select(db);
  }
  return instances[pair];
};
