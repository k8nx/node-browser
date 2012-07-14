module.exports = function(base) {
  base.get('/', function(req, res) {
    res.send('OK');
  });
};
