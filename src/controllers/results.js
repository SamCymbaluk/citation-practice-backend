const db = require('../common/database');

module.exports = {
  getResult : (req, res, next) => {
    if(req.params.id) { //Specific result
      get(req.params.id)
        .then((result) => {
          let httpCode = 200;
          if(!result) {
            httpCode = 404;
          }
          res.send(httpCode, result);
        });
    } else { //All results
      getAll(req.params.id)
        .then((results) => {
          res.send(results);
        });
    }
    next();
  },

  createResult : (req, res, next) => {
    //Insert Json payload stored in request params into db
    db('results')
      .insert(req.params)
      .then((result) => {
        res.json({
          success: true,
          message: 'ok'
        })
      });

    next();
  }

}

function get (uuid) {
  return db('results')
    .first()
    .where('id', uuid)
    .then((res) => res);
}

function getAll () {
  return db('results')
    .select()
    .then((res) => res);
}
