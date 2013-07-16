var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var content;

fs.readFile("index.html", function (err, data) {
  content = data;
});

var buffer = new Buffer(content, "utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
