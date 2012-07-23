module.exports = function(conf) {
  return new UserImpl(conf);
};

function UserImpl(conf) {
  this.conf = conf;
};

UserImpl.prototype.load = function(session, fn) {
  var user = { id: -1 };
  fn(null, user);
};

