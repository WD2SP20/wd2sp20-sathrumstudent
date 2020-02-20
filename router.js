const url = require('url');

function route(pathname) {
    console.log(`Going to route request for ${pathname}`);
}

exports.route = route;