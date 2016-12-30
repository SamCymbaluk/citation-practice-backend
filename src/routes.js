const citationController = require('./controllers/citations');

const addRoutes = (server) => {

  //Citation routes (only get for now)
  server.get('/citations/:id', citationController.getCitation);
}

module.exports = {addRoutes};
