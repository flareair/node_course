const http = require("http");

const port = 3002;

const server = http.createServer(async (request, response) => {
    if (request.url === "/api" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write("Hello there! This is a pure Node.js api");
        response.end();
    } else if (request.url === "/users" && request.method === "POST") {        
        response.end("User creation will be available soon");        
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "404 not found" }));
    }
});

server.listen(port, () => {
    console.log(`server started on port: ${port}`);
});