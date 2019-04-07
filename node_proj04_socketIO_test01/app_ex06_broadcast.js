var io = require('socket.io').listen('3000');

io.sockets.on('connection', function(socket){
    // 브로드 캐스트 - 자기 자신을 제외한 전체로 보낸다.
    
    socket.broadcast.emit('user connected!');
})