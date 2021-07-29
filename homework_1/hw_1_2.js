const http = require("http");

http
  .createServer((request, response) => {
    // response.statusCode = 200;
    // response.setHeader("Content-Type", "text/html; charset=UTF-8");
    // response.setHeader("Transfer-Encoding", "chunked");

    // let i = 0;
    // const timer = setInterval(
    //   (onEnd) => {
    //     response.write(response.);
    //     i += 1;
    //     if (i > 9) {
    //       clearInterval(timer);
    //       onEnd();
    //     }
    //   },
    //   500,
    //   () => response.end("hello world!")
    // );
    console.log(`Request came: ${request.url}`);
    if (request.url === "/") {
      sendResponse("index.html", "text/html", response);
    } else {
      sendResponse(request.url, getContentType(request.url), response);
    }
    response.end('request');
  })
  .listen(8080, () =>
    console.log("Server is listening at http://localhost:8080")
  );
