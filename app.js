const http = require('http');
const os = require('os');
var request = require('request');
var rp = require('request-promise');

console.log("Server starting...");

var options = {
    uri: 'http://18.220.145.90:8001/comicbooks',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

var handler = function(request, response) {
console.log("Received request from " + request.connection.remoteAddress);

rp(options)
    .then(function (output) {
      console.log("You've hit " + os.hostname() + "\n");
      response.writeHead(200);
      response.end(JSON.stringify(output));
    })
    .catch(function (err) {
        console.log(err);
    });
};

var www = http.createServer(handler);
www.listen(8083);