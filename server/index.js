var express = require('express');
const { connect } = require( 'http2' );
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(5000);

// app.get('/', function(request, response) {
//     response.sendFile(__dirname + '/index.html');
// });

// users = [];
// connections = [];

// io.sockets.on('connection', function(socket) {
//     console.log('Connection success!')
//     connections.push(socket);

//     socket.on('disconnect', function(data) {
//         connections.splice(connections.indexOf(socket), 1);
//         console.log('Disconnection success!')
//     });

// });