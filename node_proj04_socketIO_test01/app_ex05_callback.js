var io = require('socket.io').listen(3000);

io.sockets.on('connection', function(socket){
    socket.on('message1', function(name, callback){
        console.log("name >>>", name);
        callback('SUCCESS!');
    });
});