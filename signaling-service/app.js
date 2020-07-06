const server = require('http').createServer().listen(3000, 'localhost');
const io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
    console.log(client);
    client.on('offer', function(details) {
        client.broadcast.emit('offer', details);
        console.log('offer:  ' + JSON.stringify(details));
    });

    client.on('answer', function(details) {
        client.broadcast.emit('answer', details);
        console.log('answer: ' + JSON.stringify(details));
    });

    client.on('candidate', function(details) {
        client.broadcast.emit('candidate', details);
        console.log('candidate: ' + JSON.stringify(details));
    });

    client.emit('availableRooms', {start: "OK"});
});

console.log('Signalling service running on port 3000');