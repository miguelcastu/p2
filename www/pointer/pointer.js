const socket = io();

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
        }

        socket.emit("SENSOR_READING", angles.map((angle, i) => calcDist(angle, initPos[i])));
      };
      sensor.start();
    });
  } catch (err) {
    console.log(err);
  }
}

function toEulerYawPitch(q) {
  const pitch = Math.atan2(2 * q[0] * q[3] + 2 * q[1] * q[2], 1 - 2 * q[0] * q[0] - 2 * q[2] * q[2]) * 180 / Math.PI;
  const roll = Math.atan2(2 * q[1] * q[3] + 2 * q[0] * q[2], 1 - 2 * [1] * q[1] - 2 * q[2] * q[2]) * 180 / Math.PI;

  return [roll, pitch];
}

function calcDist(angle, initAngle) {

  angle = (angle - initAngle) * (180 / Math.PI);
  angle = angle < 0 ? angle + 360 : angle;
  angle = angle > 180 ? angle - 360 : angle;
  console.log(angle, Math.tan(angle * (Math.PI / 180)))
  const dist = Math.round(-1000 * Math.tan(angle * (Math.PI / 180)));
  return dist;
}

