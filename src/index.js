const restify = require('restify');
const routes = require('./routes');

const server = restify.createServer();

server.use(restify.authorizationParser());
routes.addRoutes(server);

server.listen(3001, 'localhost', () => console.log('%s listening at %s', server.name, server.url));
