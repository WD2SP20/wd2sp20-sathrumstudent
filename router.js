const url = require('url');

function route(handle, pathname, response, request) {
    console.log(`Going to route request for ${pathname}`);
    // Call the request handler function associated with the pathname
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        // 404 Error
        console.log(`No request handler for ${pathname}. Jeeves is out to lunch`);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 - Not Found');
        response.end();
    }

}

exports.route = route;