const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

//NETWORKING -------------------------------------------------------
io.on('connection', (socket) => {
  socket.emit('hello', 't');
  console.log('connection established');
});

server.listen(3000);
