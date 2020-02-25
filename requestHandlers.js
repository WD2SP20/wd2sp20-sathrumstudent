const querystring = require('querystring'),
      fs = require('fs'),
      formidable = require('formidable');


function start(response) {
    console.log('Handling start request');
        var body =`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>NodeJS</title>
        </head>
        <body>
           <form action="/upload" enctype="multipart/form-data" method="post">
                <input type="file" name="upload" />
                <input type="submit" value="Submit text" />
            </form>
        </body>
        </html>
        `;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(body);
        response.end();
}

function upload(response, request) {
    console.log('Handling the Upload!!!!');

    const form = new formidable.IncomingForm();
    console.log('About to parse the form');
    form.parse(request, (error, fields, files) => {
        console.log('The form has been parsed!');
        fs.rename(files.upload.path, '/tmp/test.jpg');
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('received image<br/>');
        response.write('<img src="/show" />');
        response.end();
    });

}

function show(response) {
    console.log('in the show request handler');
    response.writeHead(200, {'Content-Type': 'image/jpg'});
    fs.createReadStream('/tmp/test.jpg').pipe(response);
}

function oliver(response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Of course!');
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.oliver = oliver;
exports.show = show;