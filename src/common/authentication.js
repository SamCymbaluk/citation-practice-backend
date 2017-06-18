const db = require('../common/database');

module.exports = (req, res, next) => {
  db('admins')
    .select()
    .where('key', req.authorization.basic.password)
    .then((response) => {
      if (response) { //Key found
        next();
      } else {
        res.send(403, 'Not authorized');
        res.end();
      }
    });
}
