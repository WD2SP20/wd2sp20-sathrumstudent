const formidable = require('formidable'),
      http = require('http'),
      util = require('util');

http.createServer(function(req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse file upload
        const form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            console.log('handle the form');
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        })
        return;
    }
    // Show the form
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );
}).listen(8080);


























/*
- Should be able to open our application with a web browser
- When they go to /start
---Page displays a file upload form
---When submitted, upload image to /upload and display image

- We NEED
--- Web Server (HTTP(S))
--- Handle requests to different 'Pages', so we need router
--- Request Handler to handle the request (and associated data)
--- View logic to display HTML/CSS to the user
--- Upload Handling







*/