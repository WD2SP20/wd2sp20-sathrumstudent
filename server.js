// Bring in the HTTP Server Module
const http = require('http');
const url = require('url');

function start(route) {
    http.createServer((request, response) => {
        route(url.parse(request.url).pathname);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>Hello World!</h1>');
        response.end();
    }).listen(8080);

    console.log('Server has started.');
}

exports.start = start;