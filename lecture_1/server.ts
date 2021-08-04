import {IncomingMessage, ServerResponse} from "http";

const http = require('http');

http.createServer((request: IncomingMessage, response: ServerResponse) => {
  if (request.url === '/stats' && request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    const responseText = `${request.socket.remoteAddress} ${new Date().toUTCString()}`;
    response.write(responseText);
    response.end();
  } else if (request.url === '/users' && request.method === 'POST') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('User creation will be available soon');
    response.end();
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 Not Found');
    response.end();
  }
}).listen(8080, () => {
  console.log("Server is listening at http://localhost:8080")
});