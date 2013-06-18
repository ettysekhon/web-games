// "ws" library
var WebSocket = require('ws');
var http = require('http')

// HTTP server is required to "Upgrade" the connection to WebSocket
var httpserver = http.createServer()
httpserver.listen(9999)

var wsserver = new WebSocket.Server({server:httpserver});

// 'connection' event is fired every time somebody connects via WebSocket
wsserver.on('connection', function(socket){
    // the event gets newly connected 'socket' as the argument

    // 'message' event is fired when this socket receives any message
    socket.on('message', function(data){

        // I'm going to send the data back
        socket.send(data)
    })
});
