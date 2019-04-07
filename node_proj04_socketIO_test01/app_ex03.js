var http = require('http');
var express = require('express');
var app = express();
var cors = require('cors');
var socketio = require('socket.io');

//app.use(cors());

var server = http.createServer(app);
server.listen(3000, function() {
    console.log('http://localhost:3000');
})

var io = socketio.listen(server);

io.sockets.on('connection', function(socket){
    console.log('socket connection...');
    
    io.sockets.emit('this', {will: 'be recevied by everyone'});
    
    socket.on('private message', function(from, msg){
        console.log('private message by ', from, msg);
    })
})