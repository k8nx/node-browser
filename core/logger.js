module.exports = new Logger();

function Logger() {
  var clc = require('cli-color');
  function def(head, fn) {
    return function() {
      fn.apply(null, [head].concat(Array.prototype.slice.call(arguments).join(' ')));
    };
  };

  this.error = def(clc.red.bold('ERR'), console.error);
  this.warn = def(clc.magenta.bold('WARN'), console.warn);
  this.info = def(clc.green.bold('INFO'), console.info);
  this.debug = def(clc.blue.bold('DEBUG'), console.log);
};

