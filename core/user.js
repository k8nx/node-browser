module.exports = function(conf) {
  return new UserAPI(conf);
};

function UserAPI(conf) {
  this.impl = require('./'+conf.user.impl)(conf);
};

UserAPI.prototype.load = function(session, fn) {
  this.impl.load(session, fn);
};
