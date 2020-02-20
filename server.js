// Bring in the HTTP Server Module
const http = require('http');
const url = require('url');

function start(route, handle) {
    http.createServer((request, response) => {
        let postData = '';
        let chunkCount = 0;
        request.setEncoding('utf8');
        // Get the chunks and combine them
        // Will onlt be called multiple times if there is lots of data
        request.addListener('data', postDataChunk => {
            postData += postDataChunk;
            chunkCount++;
            console.log(`Got Chunk #${chunkCount}`);
        });
        request.addListener('end', () => {
            console.log(chunkCount);
            route(handle, url.parse(request.url).pathname, response);
        });
    }).listen(8080);

    console.log('Server has started.');
}

exports.start = start;