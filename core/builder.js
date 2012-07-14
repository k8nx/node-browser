var logger = require('./logger');

module.exports = new Builder();

function Builder() {
  this.base = new Base();
};

Builder.prototype.conf = function(conf) {
  this.base.conf = conf;
  return this;
};

Builder.prototype.app = function(connect, app) {
  var conf = this.base.conf;
  if (conf == null) {
    logger.error('conf is not set.');
    process.exit(2);
  }
  var session = require('./session')(conf);
  this.base.app = app;
  app.use(connect.cookieParser());
  app.use(connect.session({
    secret: conf.cookie.secret
    , cookie: { domain: conf.cookie.domain, maxAge: conf.cookie.expire }
    , store: session.create(connect)
  }));
  app.use(connect.bodyParser());
  app.use(connect.methodOverride());
  app.use(app.router);
  return this;
};

Builder.prototype.modules = function(modules) {
  var app = this.base.app;
  var conf = this.base.conf;
  if (conf == null || app == null) {
    logger.error(conf == null ? 'conf':'app', 'is not set.');
    process.exit(2);
  }
  if (modules == null || modules.length > 0) {
    for (var i in modules) {
      require('../_modules/'+modules[i])(this.base);
    }
  }
  return this;
};

Builder.prototype.build = function() {
  return this.base;
};

function Base() {
  this.app = null;
  this.conf = null;
};

Base.prototype.get = function() {
  this.app.get.apply(this.app, Array.prototype.slice.call(arguments));
  return this;
};

Base.prototype.post = function() {
  this.app.post.apply(this.app, Array.prototype.slice.call(arguments));
  return this;
};

Base.prototype.put = function() {
  this.app.put.apply(this.app, Array.prototype.slice.call(arguments));
  return this;
};

Base.prototype.del = function() {
  this.app.del.apply(this.app, Array.prototype.slice.call(arguments));
  return this;
};
