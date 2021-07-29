const http = require("http");

http
  .createServer((request, response) => {
    if (request.method === "GET" && request.url === "/stats") {
      const data = {
        "IP address": response.connection.remoteAddress,
        "current time": new Date().toGMTString(),
      };
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(data));
    }
    if (request.method === "POST" && request.url === "/users") {
      response.end("User creation will be available soon");
    }
    response.statusCode = 404;
    response.end();
  })
  .listen(8080, () =>
    console.log("Server is listening at http://localhost:8080")
  );
