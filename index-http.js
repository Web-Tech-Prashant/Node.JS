const http = require("http");
const port = 8001;
const hostName = "localhost";

const server = http.createServer(function (request, response) {
  response.writeHead(200, {
    // 'Content-Length': Buffer.byteLength(body),
    "Content-Type": "text/plain",
  });
  response.write(
    "Welcome to Node.JS - Server Side Programming using Javascript"
  );
  response.end();
});
server.listen(port,hostName,()=>{
    console.log(`Server is listening on ${port}`);
})
