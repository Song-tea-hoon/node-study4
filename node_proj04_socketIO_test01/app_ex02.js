var socketio = require('socket.io');
var http = require('http');
var express = require('express');
var static = require('serve-static');
var path = require('path');
var app = express();

var server = http.createServer(app);
server.listen(3000, function(){
    console.log('http://locakhost:3000');
});

// express server에 socket.io 추가
var io = socketio.listen(server);
// 최초 연결(connection) 이벤트 수신
io.sockets.on('connection', function(socket){
    console.log('서버에 connection 됨');
    // 클라이언트로 이벤트 보냄
    socket.emit('news', {hello:'world'});
    // 클라이언트 이벤트 받기
    socket.on('my other event', function(data){
        console.log(data);
    })
})