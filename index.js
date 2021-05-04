const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + ''));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/control', (req, res) => {
    res.sendFile(__dirname + '/control.html');
 });

io.on('connect', socket => {
    console.log('user connected')
    socket.on('trigger', msg => {
        io.emit('trigger')
    })
})



server.listen(3000, () => {
  console.log('listening on *:3000');
});