// Obtener los botones del controlador
var rewindButton = document.getElementById('rewind');
var stopButton = document.getElementById('stop');
var speedButton = document.getElementById('speed');
var volumeUpButton = document.getElementById('volume-up');
var volumeDownButton = document.getElementById('volume-down');


const player = document.getElementById("video-player");

// Configuramos los eventos click para los botones del controlador
rewindButton.addEventListener("click", () => {
    // Rebobinamos el vídeo 10 segundos
    player.getCurrentTime().then((currentTime) => {
      player.seekTo(currentTime - 10);
    });
  });

stopButton.addEventListener("click", () => {
    player.getPlayerState().then((state) => {
      if (state === 1 || state === 2) {
        // Si el estado del reproductor es "reproduciendo" o "en pausa", lo detenemos
        player.pauseVideo();
      } else {
        // Si el estado del reproductor es "detenido", lo iniciamos
        player.playVideo();
      }
    });
});


speedButton.addEventListener("click", () => {
    // Aceleramos el vídeo 1.5x
    player.getPlaybackRate().then((playbackRate) => {
      player.setPlaybackRate(playbackRate + 0.5);
    });
});


volumeUpButton.addEventListener('click', function() {
  var currentVolume = player.getVolume();
  if (currentVolume < 100) {
    player.setVolume(currentVolume + 10);
  }
});

volumeDownButton.addEventListener('click', function() {
  var currentVolume = player.getVolume();
  if (currentVolume > 0) {
    player.setVolume(currentVolume - 10);
  }
});