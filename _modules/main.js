module.exports = function(base) {
  base.get('/', function(req, res) {
    res.render('main');
  });
};
