const restify = require('restify');
const routes = require('./routes');

const server = restify.createServer();

server.use(restify.CORS());
server.use(restify.authorizationParser());

server.opts(/.*/, (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
    res.send(200);
    return next();
});

server.use(restify.bodyParser({ mapParams: true }));

routes.addRoutes(server);

server.listen(3001, () => console.log(`${server.name} listening at ${server.url}`));
