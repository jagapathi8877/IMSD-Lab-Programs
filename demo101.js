const http = require("http");
const server = http.createServer((req,res) =>{
      res.end("Aditya University");
});
server.listen(7000,() =>{
    console.log(server.address());
    console.log("Above is the server address");
    console.log("Server running at http://localhost:7000/");
});