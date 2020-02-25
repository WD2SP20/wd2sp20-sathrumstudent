const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/oliver'] = requestHandlers.oliver;
handle['/luke'] = requestHandlers.oliver;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);