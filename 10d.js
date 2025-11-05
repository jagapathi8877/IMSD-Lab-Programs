const url = require("url");
const address = "https://cloud.google.com/blog/topics/training-certifications/the-arcade-with-google-cloud-game-helps-boost-cloud-skills";
const parsedurl = url.parse(address,true);
console.log("Host : ", parsedurl.host);
console.log("Pathname : ",parsedurl.pathname);
console.log("Query Parameters : ", parsedurl.query);