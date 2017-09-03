const db = require('../common/database');

module.exports = {
  getResult : (req, res, next) => {
    db('results')
      .first()
      .where('id', req.params.id)
      .then((result) => {
        let httpCode = 200;
        if(!result) {
          httpCode = 404;
        }
        res.send(httpCode, result);
        return next();
      })
      .catch((error) => res.send(error));
  },

  getResults : (req, res, next) => {
    db('results')
      .orderBy('submission_timestamp', 'desc')
      .select()
      .then((results) => {
        res.send(results);
        return next();
      });
  },

  createResult : (req, res, next) => {
    //Insert Json payload stored in request params into db

    const data = {
      name_first: req.params.name_first,
      name_last: req.params.name_last,
      email: req.params.email,
      score: req.params.score,
      classroom: req.params.classroom
    };

    db('results')
      .insert(data)
      .then((result) => {
        res.json({
          success: true,
          message: 'ok'
        });
        return next();
      });
  },

  getClassroomResults: (req, res, next) => {
    db('results')
      .where('classroom', rq.params.classroom)
      .then((results) => {
        res.send(results);
        return next();
      });
  },
};
