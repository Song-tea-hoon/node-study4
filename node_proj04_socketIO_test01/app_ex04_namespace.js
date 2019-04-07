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
    
    //chat 변수와 socket변수로 데이터 확인 테스트
    socket.emit('socket message', {
        that: 'only',
        '/chat': 'will get'
    });
    
    chat.emit('chat message', {
        that: 'in',
        '/chat': 'will get'
    });
});