const http = require('http');
const url = require('url');

http
  .createServer((request, response) => {
    if (request.url === '/stats') {
      response.end(`IP: ${request.socket.remoteAddress}, Date: ${new Date().toLocaleString()}`);
    } else if (request.url === '/users') {
      response.end('User creation will be available soon');
    } else {
      response.statusCode = 404;
      throw new Error('404 Not found');
    }
  })
  .listen(8080, () =>
    console.log("Server is listening at http://localhost:8080")
  );
