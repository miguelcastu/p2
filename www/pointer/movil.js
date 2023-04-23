// Obtener los botones del controlador
var rewindButton = document.getElementById('rewind');
var stopButton = document.getElementById('stop');
var speedButton = document.getElementById('speed');
var volumeUpButton = document.getElementById('volume-up');
var volumeDownButton = document.getElementById('volume-down');


const player = document.getElementById("video-player");

// Configuramos los eventos click para los botones del controlador
volumeUpButton.addEventListener("click", () => {
    socket.emit("rewind");
});

volumeUpButton.addEventListener("click", () => {
    socket.emit("stop");
});

volumeUpButton.addEventListener("click", () => {
    socket.emit("speed");
});

volumeUpButton.addEventListener("click", () => {
    socket.emit("volume-up");
});

volumeUpButton.addEventListener("click", () => {
    socket.emit("OK");
});

volumeUpButton.addEventListener("click", () => {
  socket.emit("volume-down");
});