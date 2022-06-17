var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});