const db = require('../common/database');

module.exports = (req, res, next) => {
  db('admins')
    .where('key', req.authorization.basic.password)
    .select()
    .then((response) => {
      if (response.length > 0) { //Key found
        next();
      } else {
        res.send(403, 'Not authorized');
        res.end();
      }
    });
};
