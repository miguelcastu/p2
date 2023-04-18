const path =require('path');
const express = require('express');
const app = express();

app.set('port',process.env.PORT || 3000);

app.use(express.static(path.join(__dirname,'public')));

const server=app.listen(app.get('port'), () => {
  console.log(`Servidor en escucha en el puerto`, app.get('port'));
});


//whitesockets
const socketIO = require('socket.io');
const io = socketIO(server);
io.on('connection', (socket) => {
  console.log("new connection", socket.id);
});



