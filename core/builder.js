module.exports = new Builder();

var conf = require('config');
var session = require('./session')(conf);

function Builder() {
  this.base = new Base();
};

Builder.prototype.app = function(connect, app) {
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

Builder.prototype.build = function() {
  return this.base;
};

function Base() {
  this.app = null;
};
