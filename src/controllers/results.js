const db = require('../common/database');
const postfix = require('../common/email');

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
          postfix.sendMail({
            from: 'learningres@cathedralgaels.ca',
            to: email,
            subject: 'Citation quiz results',
            text:   //Final language TBD
            `${req.params.name_first} ${req.params.name_last} completed a citation quiz.
            Score: ${req.params.score}`
            }, (err) => {
              console.log(err);
          });
        }
      });


    next();
  }

}
