const db = require('../common/database');

module.exports = {

  getCitation : (req, res, next) => {
    db('citations')
      .first()
      .where('id', req.params.id)
      .then((citation) => {
        let httpCode = 200;
        if(!citation) {
          httpCode = 404;
        }
        res.send(httpCode, citation);
        return next();
      })
      .catch((error) => res.send(error));
  },

  getCitations : (req, res, next) => {
    db('citations')
      .select()
      .then((citations) => {
        res.send(citations);
        return next();
      });
  }

}
