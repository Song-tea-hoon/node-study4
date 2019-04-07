// socket호출과 동시에 listen 3000번 실행
const io = require('socket.io')(3000);

// 서버는 connection / client는 connect
io.sockets.on('connection', function(socket){
    console.log('sockets connection');
    socket.emit('news', {hello:'world'});
    socket.on('my other event', function(data){
        console.log(data);
    })
})