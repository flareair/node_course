const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/stats') {
    const date = new Date();

    const data = {
      equesters_ip_address: request.socket.address().address,
      current_GMT_time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };

    response.statusCode = 200;
    response.end(JSON.stringify(data));
  } else if (request.method === 'POST' && request.url === '/users') {
    response.statusCode = 200;
    response.end('User creation will be available soon');
  } else {
    response.statusCode = 404;
    response.end('404 Not found');
  }
}).listen(3000, () =>
  console.log("Server is listening at http://localhost:3000")
);
