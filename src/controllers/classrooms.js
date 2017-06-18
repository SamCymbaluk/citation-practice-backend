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
      .insert(req.body)
      .then((response) => {
        handleResponse(response);
        return next();
      })
      .catch((error) => res.send(error));
  },

  delClassroom : (req, res, next) => {
    db('classrooms')
      .where('id', req.params.id)
      .del()
      .then((response) => {
        handleResponse(response);
        return next();
      })
      .catch((error) => res.send(error));
  },
};

function handleResponse(res) {
  let httpCode = 200;
  if (!res) {
    httpCode = 500;
  }
  res.send(httpCode);
}
