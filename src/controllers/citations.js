const db = require('../common/database');

module.exports = {

  getCitation : (req, res, next) => {
    console.log(req.authorization);
    if(req.params.id) { //Specific citation
      get(req.params.id)
        .then((citation) => {
          let httpCode = 200;
          if(!citation){
            httpCode = 404;
          }
          res.send(httpCode, citation);
        });
    } else { //All citations
      getAll(req.params.id)
        .then((citations) => {
          res.send(citations);
        });
    }
    next();
  }

}

function get (uuid) {
  return db('citations')
    .first()
    .where('id', uuid)
    .then((res) => res);
}

function getAll () {
  return db('citations')
    .select()
    .then((res) => res);
}
