var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer;

  fs.readFile("index.html", function (err, data) {
    if (err) throw err;
    buffer = new Buffer(data);
    response.send(buffer.toString("utf-8"));
  });
});

var port = process.env.PORT || 5050;

app.listen(port, function() {
  console.log("Listening on " + port);
});
