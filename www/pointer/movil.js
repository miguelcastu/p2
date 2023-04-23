// Obtener los botones del controlador
var rewindButton = document.getElementById('rewind');
var stopButton = document.getElementById('stop');
var speedButton = document.getElementById('speed');
var volumeUpButton = document.getElementById('volume-up');
var volumeDownButton = document.getElementById('volume-down');


const player = document.getElementById("video-player");

// Configuramos los eventos click para los botones del controlador

const socket = io();
  

socket.on("connect", () => {
    console.log("Conexión establecida con el servidor");
    socket.emit("CLIENT_CONNECTED", { id: 1 });

    socket.on("ACK_CONNECTION", () => {
        console.log("ACK");
    });
    volumeUpButton.addEventListener("click", function() {
        socket.emit("volume-up");
        
    });
});
