var redis = require('./redis');

module.exports = function(conf, connect) {
  var client = redis.createClient.apply(null, conf.cookie.store.args);
  var RedisStore = require('connect-redis')(connect);
  return new RedisStore({client: client});
};
