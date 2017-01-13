const restify = require('restify');
const routes = require('./routes');

const server = restify.createServer();

server.use(restify.bodyParser({ mapParams: true }));

routes.addRoutes(server);

server.listen(3001, 'localhost', () => console.log(`${server.name} listening at ${server.url}`));
