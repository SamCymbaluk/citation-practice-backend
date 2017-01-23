const db = require('../common/database');
const postfix = require('../common/email');

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

    const data = {
      name_first: req.params.name_first,
      name_last: req.params.name_last,
      email: req.params.emails,
      score: req.params.score
    }

    db('results')
      .insert(data)
      .then((result) => {
        res.json({
          success: true,
          message: 'ok'
        });
        //Send emails
        for(const email of req.params.teacher_emails) {
          postfix.send({
              text: //Final language TBD
              `
              ${req.params.name_first} ${req.params.name_last} completed a citation quiz.
              Score: ${req.params.score}
              `,
              from: "sam@cathedralgaels.ca",
              to: email,
              subject: "Citation quiz results"

          }, (err, message) => {
            console.log(err, message);
          });
        }
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
