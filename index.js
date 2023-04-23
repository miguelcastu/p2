const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use('/', express.static(path.join(__dirname, 'www')));

let clientSocket;

io.on('connection', (socket) => {
  console.log(`socket connected ${socket.id}`);

  socket.on("POINTER_CONNECTED", () => {
    socket.emit("ACK_CONNECTION");
    if (clientSocket) clientSocket.emit("NEW_POINTER", { pointerId: socket.id });
  });

  socket.on("volume-up", () => {
    if (clientSocket) clientSocket.emit("volume-up",clientSocket.emit("volume-up"));
    
  });

  socket.on("volume-down", () => {
    if (clientSocket) clientSocket.emit("volume-down",clientSocket.emit("volume-down"));
    
  });

  socket.on("speed", () => {
    if (clientSocket) clientSocket.emit("speed",clientSocket.emit("speed"));
    
  });

  socket.on("stop", () => {
    if (clientSocket) clientSocket.emit("stop",clientSocket.emit("stop"));
    
  });

  socket.on("rewind", () => {
    if (clientSocket) clientSocket.emit("rewind",clientSocket.emit("rewind"));
    
  });

  socket.on("play", () => {
    if (clientSocket) clientSocket.emit("play",clientSocket.emit("play"));
    
  });

  socket.on("OK", (data) => {
    console.log(data);
    if (clientSocket) clientSocket.emit("OK", {
      pointerId: socket.id,
      coords: data
    });
  });

  socket.on("return", () => {
    if (clientSocket) clientSocket.emit("return",clientSocket.emit("return"));
    
  });
    
  socket.on("SENSOR_READING", (data) => {

    if (clientSocket) clientSocket.emit("SENSOR_READING", {
      pointerId: socket.id,
      coords: data
    });
  });

  socket.on("CLIENT_CONNECTED", () => {
    clientSocket = socket;
    clientSocket.emit("ACK_CONNECTION");
  })
});

server.listen(9000, () => {
  console.log("Server listening...");
});