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
    
    // chat 변수와 socket변수로 데이터 확인 테스트
    // 현재 연결된 소켓만 이벤트 발생
    socket.emit('socket message', {
        that: 'only',
        '/chat': 'will get'
    });
    
    // chat과 관련된 모든 socket에 이벤트 발생
    chat.emit('chat message', {
        that: 'in',
        '/chat': 'will get'
    });
    
    // 메세지 받기
    chat.on('hi', function(msg) {
        console.log('chat hi >>> ', msg);
    })
    
    socket.on('hi', function(msg) {
        console.log('socket hi >>>', msg);
    })
});

// 보내는 것은 전체 보내기가 되는데
// 받는것은 전체 받기가 안된다????
var news = io.of('/news').on('connection', function(socket){
    // 메세지 받기
    news.on('hi', function(msg) {
        console.log('news hi >>> ', msg);
    })
    
    socket.on('hi', function(msg) {
        console.log('socket hi >>>', msg);
    })
})