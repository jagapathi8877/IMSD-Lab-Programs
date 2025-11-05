const http = require("http");
const server = http.createServer((req,res) =>{
      res.writeHead(200,{"Content-Type" : "text/plain"});
      res.end("Hello World\n")
});
server.listen(7777,() =>{
    console.log("Server is running at http://localhost:7777/");
    console.log("Hi ra Vivek");
});