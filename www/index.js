const socket = io();

const qrcode = new QRCode("qrcode", {
  text: "http://localhost:9000/pointer/pointer.html",
  width: 512,
  height: 512,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

socket.on("connect", () => {
  socket.emit("CLIENT_CONNECTED", { id: 1 });

  socket.on("ACK_CONNECTION", () => {
    console.log("ACK");
  });

  socket.on("NEW_POINTER", (data) => {
    const pointerEl = document.createElement("div");
    pointerEl.id = data.pointerId;
    pointerEl.classList.add("pointer");
    pointerEl.style.backgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.appendChild(pointerEl);

  })

  socket.on("SENSOR_READING", (data) => {
    const cursor = document.querySelector(`#${data.pointerId}`);
    if (cursor) {
      cursor.style.left = data.coords[0] + window.innerWidth / 2;
      cursor.style.top = data.coords[1] + window.innerHeight / 2;
    }

  });
  socket.on("OK", (data) => {
    click_pointer(data);
    });

});

document.getElementById("menu-inicial").onclick = function () {
  location.href = "./inicio.html";
};

  function click_pointer(data){
    console.log("click");
    let x= data.coords[0] + window.innerWidth / 2;
    let y=data.coords[1] + window.innerHeight / 2;
    console.log(x);
    console.log(y);
    document.elementFromPoint(x, y).click();
  }

