// Bring in the HTTP Server Module
const http = require('http');
const url = require('url');

exports.start = (route, handle) => {
    http.createServer((request, response) => {
        route(handle, url.parse(request.url).pathname, response, request);
    }).listen(8080);

    console.log('Server has started.');
};