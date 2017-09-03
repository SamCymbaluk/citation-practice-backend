const db = require('../common/database');
const uuidv4 = require('uuid/v4');

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
  },

  createCitation: (req, res, next) => {
    db('citations')
      .insert(req.body)
      .then((response) => {
        handleResponse(response, res);
        return next();
      })
      .catch((error) => res.send(error));
  },

  editCitation : (req, res, next) => {
    db('citations')
      .where('id', req.params.id)
      .update(req.params.data)
      .then((response) => {
        handleResponse(response, res);
        return next();
      })
      .catch((error) => res.send(error));
  },

  delCitation : (req, res, next) => {
    db('citations')
      .where('id', req.params.id)
      .del()
      .then((response) => {
        handleResponse(response, res);
        return next();
      })
      .catch((error) => res.send(error));
  }
};

function handleResponse(response, res) {
  let httpCode = 200;
  if (!response) {
    httpCode = 500;
  }
  res.send(httpCode);
}
