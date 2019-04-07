var http = require('http');
var express = require('express');
var app = express();
var socketio = require('socket.io');


var server = http.createServer(app);
server.listen(3000, function(){
    console.log('http://localhost:3000')
});

var io = socketio.listen(server);

// 네임스페이스 설정
// of(경로).on(이벤트 ,function{});
var chat = io.of('/chat').on('connection', function(socket){
   console.log('chat connection event ...');
});