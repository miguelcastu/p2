const socket = io();
  

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
    //console.log(data);
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

document.getElementById("videos-button").onclick = function () {
    location.href = "content1/videos.html";
  };
  
  document.getElementById("series-button").onclick = function () {
    location.href = "content1/series.html";
  };
  
  document.getElementById("peliculas-button").onclick = function () {
    location.href = "content1/peliculas.html";
  };
  function click_pointer(data){
    console.log("click");
    let x= data.coords[0] + window.innerWidth / 2;
      let y=data.coords[1] + window.innerHeight / 2;
    var elemento = document.elementFromPoint(x, y).click();
    console.log(elemento)
    /*
    var evento = new MouseEvent("click", { 
      'view':window,
      'bubbles':true,
      'cancelable': true
    })
    elemento.dispatchEvent(evento)*/
    
  }
  