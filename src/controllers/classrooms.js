const db = require('../common/database');

module.exports = {
  getClassrooms : (req, res, next) => {
    db('classrooms')
      .select()
      .then((results) => {
        res.send(results);
        return next();
      });
  },

  getClassroom : (req, res, next) => {
    db('classrooms')
      .first()
      .where('id', req.params.id)
      .then((results) => {
        res.send(results);
        return next();
      });
  },

  createClassroom : (req, res, next) => {
    db('classrooms')
      .insert({
        id: req.params.id,
        key: req.params.key
      })
      .then((response) => {
        handleResponse(response, res);
        return next();
      })
      .catch((error) => {
        console.log(error);
        res.send(error);
      });
  },

  delClassroom : (req, res, next) => {
    db('classrooms')
      .where('id', req.params.id)
      .del()
      .then((response) => {
        handleResponse(response, res);;
        return next();
      })
      .catch((error) => res.send(error));
  },
};

function handleResponse(response, res) {
  let httpCode = 200;
  if (!response) {
    httpCode = 500;
  }
  res.send(httpCode);
}
