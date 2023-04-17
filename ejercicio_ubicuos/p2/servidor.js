const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configurar la API RESTful
app.get('/api/data', (req, res) => {
  const data = { message: 'Hola desde la API RESTful!' };
  res.json(data);
});

// Configurar Socket.io
io.on('connection', (socket) => {
  console.log(`Nuevo cliente conectado: ${socket.id}`);
  
  // Manejar eventos del cliente
  socket.on('evento-del-cliente', (data) => {
    console.log(`El cliente envió el siguiente mensaje: ${data.message}`);
    
    // Enviar mensaje de vuelta al cliente
    io.to(socket.id).emit('evento-del-servidor', { message: 'Mensaje del servidor' });
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor en escucha en el puerto ${PORT}`);
});

