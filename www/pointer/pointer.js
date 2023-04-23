// Obtener los botones del controlador
var rewindButton = document.getElementById('rewind');
var stopButton = document.getElementById('stop');
var speedButton = document.getElementById('speed');
var volumeUpButton = document.getElementById('volume-up');
var volumeDownButton = document.getElementById('volume-down');
var playButton = document.getElementById('play');
var okButton = document.getElementById('OK');
let click=false;
const socket = io();

volumeUpButton.addEventListener("click", function() {
  socket.emit("volume-up")
;})

volumeDownButton.addEventListener("click", function() {
  socket.emit("volume-down")
;})

speedButton.addEventListener("click", function() {
  socket.emit("speed")
;})

stopButton.addEventListener("click", function() {
  socket.emit("stop")
;})

rewindButton.addEventListener("click", function() {
  socket.emit("rewind")
;})

playButton.addEventListener("click", function() {
  socket.emit("play")
;})


okButton.addEventListener("click", function() {
  click=true;
})


if ('AbsoluteOrientationSensor' in window) {
  try {
    const sensor = new AbsoluteOrientationSensor({ frequency: 60 });
    socket.on("connect", () => {
      socket.emit("POINTER_CONNECTED");
    });

    let calibrate = true;
    let initPos = [0, 0];

    document.body.addEventListener("click", (e) => {
      calibrate = true;
    })

    socket.on("ACK_CONNECTION", () => {
      sensor.onreading = (e) => {
        const quat = e.target.quaternion;
        const angles = toEulerYawPitch(quat);
        if (calibrate) {
          initPos = angles;
          calibrate = false;
        };

        let almacenar=angles.map((angle, i) => calcDist(angle, initPos[i]));
        console.log(almacenar);
        socket.emit("SENSOR_READING", almacenar);
        if (click) {
          navigator.vibrate(10);
          click=false;
          socket.emit("OK", almacenar);      
        };
 
        };
      sensor.start();
    });
  } catch (err) {
    console.log(err);
  }
}

function toEulerYawPitch(q) {
  const roll = Math.atan2(2 * q[0] * q[3] + 2 * q[1] * q[2], 1 - 2 * q[0] * q[0] - 2 * q[1] * q[1]) * 180 / Math.PI;
  const yaw = Math.atan2(2 * q[2] * q[3] + 2 * q[0] * q[1], 1 - 2 * [1] * q[1] - 2 * q[2] * q[2]) * 180 / Math.PI;

return [yaw, roll]
}

function calcDist(angle, initAngle) {
  angle = angle < 0 ? angle + 360 : angle;
  angle = angle > 180 ? angle - 360 : angle;
  console.log(angle, Math.tan(angle * (Math.PI / 180)))
  const dist = Math.round(-1000 * Math.tan(angle * (Math.PI / 180)));
  return dist;
}

