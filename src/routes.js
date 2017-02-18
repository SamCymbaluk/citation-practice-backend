const citationController = require('./controllers/citations');
const resultController = require('./controllers/results');

const addRoutes = (server) => {

  //Citation routes (only get for now)
  server.get('/mla/citations', citationController.getCitations);
  server.get('/mla/citations/:id', citationController.getCitation);

  //Result rules
  server.get('/mla/results', resultController.getResults);
  server.get('/mla/results/:id', resultController.getResult);
  server.post('/mla/results', resultController.createResult);
}

module.exports = {addRoutes};
