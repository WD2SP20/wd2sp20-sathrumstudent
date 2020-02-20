const exec = require('child_process').exec;


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
           <form action="/upload" method="post">
                <textarea name="text" rows="20" cols="60"></textarea>
                <input type="submit" value="Submit text" />
            </form>
        </body>
        </html>
        `;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(body);
        response.end();
}

function upload(response) {
    console.log('Handling the Upload!!!!');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Welcome to the upload page!');
    response.end();
}

exports.start = start;
exports.upload = upload;