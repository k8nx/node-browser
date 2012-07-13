module.exports = function(conf, connect) {
  return new SessionStore(conf, connect);
};

function SessionStore(conf, connect) {
  this.conf = conf;
};

SessionStore.prototype.create = function(connect) {
  return require('./session-'+this.conf.cookie.store.name)(this.conf, connect);
};
