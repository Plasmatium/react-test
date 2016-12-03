/*
var http = require("http");
var fs = require("fs");

fs.readFile("./public/index.html", "utf8", function (err, data) {
  if(err) {
    console.log(err);
    return;
  }

  http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/HTML"})
    res.write(data);
    res.end();
  }).listen(8888);
  console.log("server running on http://localhost:8888/");
});
*/
var connect = require("connect");
var serveStatic = require("serve-static");

var app = connect();
app.use(serveStatic("./build"));

app.listen(8309);
console.log("Server starts on http://localhost:8309")
