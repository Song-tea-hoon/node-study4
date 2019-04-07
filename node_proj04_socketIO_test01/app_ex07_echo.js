// echo server는 클라이언트에서 발생한 내용을 다시 클라이언트로 돌려주는 서버.
var io = require('socket.io').listen(3000);

// 서버는 connection 클라이언트는 connect
// 모든 소켓에서 connection이벤트 수신
io.sockets.on('connection', function(socket){
    // connection된 소켓에서 'msg'이벤트 수신
    socket.on('msg', function(data){
        console.log(data);
        setTimeout(function(){
            // io.sockets.emit() <--- 자기를 포함한 모든 접속자에게 전달. (broadcast는 자신 제외)
            socket.emit('msg_by_server', 'Server got your message: '+data);
        }, 1000)
    });
});