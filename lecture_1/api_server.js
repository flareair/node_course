const http = require('http');

const server = http.createServer((req, res) => {

  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  if (pathname === '/stats' && req.method === 'GET') {
    res.end(`date: ${new Date().toString()}, ip: ${res.socket.remoteAddress}`);

  } else if (pathname === '/users' && req.method === 'POST') {
    res.end('User creation will be available soon');

  } else {
    res.statusCode = 404;
    res.end('404 Not found');
  }
})

server.listen(3000, '127.0.0.1', () => {
  console.log('listening the requests');
})