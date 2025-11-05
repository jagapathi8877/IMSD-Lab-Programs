const fs = require("fs");
const content = "HTML, CSS, Javascript,Typescript, MongoDB, Express.js, React.js, Node.js";
fs.writeFile("src.txt",content,(err) => {
  if(err) throw err;
  console.log("src.txt is created and the content is added in the file successfully");
});