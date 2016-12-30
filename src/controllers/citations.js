const db = require('../common/database');

module.exports = {

  getCitation : (req, res, next) => {
    if(req.params.id) { //Specific citation
      res.send(`ID: ${req.params.id}`);
    } else { //All citations

    }
    next();
  }

}
