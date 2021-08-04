"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
http.createServer(function (request, response) {
    if (request.url === '/stats' && request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        var responseText = request.socket.remoteAddress + " " + new Date().toUTCString();
        response.write(responseText);
        response.end();
    }
    else if (request.url === '/users' && request.method === 'POST') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('User creation will be available soon');
        response.end();
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 Not Found');
        response.end();
    }
}).listen(8080, function () {
    console.log("Server is listening at http://localhost:8080");
});
