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
  console.log("h")
  socket.on("volume-up", () => {
	console.log("hjkhjk");
	upVolumen();
  });

});

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
	const urlParams = new URLSearchParams(window.location.search);
	const videoId = urlParams.get('videoId');
	console.log(videoId);
	
	player = new YT.Player('ytplayer', {
		height: '360',
		width: '640',
		videoId: videoId
	});

	const video = getVideo(videoId);
	var element=document.getElementById('titulo').innerHTML = video;
}

function playVideo() {
	player.playVideo();
}

function pauseVideo() {
	player.pauseVideo();
}

function upVolumen() {
	var volumen = player.getVolume();
	player.setVolume(volumen+5);
	console.log(volumen);
}

function downVolumen() {
	var volumen = player.getVolume();
	player.setVolume(volumen-5);
	console.log(volumen);
}

function advance() {
	var currentTime = player.getCurrentTime();
	player.seekTo(currentTime + 10, true);
}

function rewind() {
	var currentTime = player.getCurrentTime();
	player.seekTo(currentTime - 10, true);
}


function getVideo(videoId) {
// Aquí se puede modificar la forma en que se obtiene la ID del video de YouTube
switch (videoId) {
	//Videos
	case 'BbZi8xGMyuM':
		return 'Saiko-Supernova';
	case '1hd9E9DYC7U':
		return 'EL NUEVO EA SPORTS FC 24 !!! ADIOS FIFA ... DjMaRiiO';
	case '8Q10pNThpF4':
		return 'EPISODIO 53 EL XOKAS';

	case 'MxCYv_m3UFk':
		return 'Hola YouTube';
	case 'BW5Iq814xlE':
		return 'NATOS | SELECTA Motorseries #01';
	case 'gE0CGqtySUE':
		return 'Así es la Dura Vida en Alaska';

	//Series
	case 'nEPCaaMLd9Q':
		return 'Aquí no hay quien viva (T1-C1)';
	case 'cRVRbUAvkRw':
		return 'Prendí la calle desde la prisión';
	case 'IV9gx6LV57Y':
		return 'DISASTER CHEFS 2 #1';

	case 'oMMa42e_b34':
		return 'EPISODIO 5 HACKERS';
	case '7Ql5wGkrpWA':
		return 'SOLO en los PEORES BARRIOS de PALMA';
	case 'jsnspXF8qxs':
		return '24 horas con Myke Towers';
	
	//Peliculas
	case 'LB9nQCi_zEg':
		return 'Todo a la vez en todas partes';
	case 'v55PruG5k2w':
		return 'Coraline y la puerta secreta';
	case 'HS0XQqI-eyo':
		return 'Top Gun: Maverick';

	case '4tDAcZifw5I':
		return 'Orgullo y prejuicio';
	case 'kxtBO5gwKmM':
		return 'Titanic';
	case '6Uk0DKnJ_AU':
		return 'Ben Hur';

	default:
		return '';

	}
}
const videoThumbnails = document.querySelectorAll('.thumbnail img');
//const videoPlayer = document.getElementById('video-player');

function onYouTubeIframeAPIReady() {
	videoThumbnails.forEach(thumbnail => {
		
		thumbnail.addEventListener('click', () => {
			const video = thumbnail.parentNode.getAttribute('data-video');
			const videoId = getVideoId(video);
			window.location.href = `reproductor.html?videoId=${videoId}`;
		});

		thumbnail.addEventListener('mouseover', () => {
			const videoId = getVideoId(thumbnail.parentNode.getAttribute('data-video'));
			thumbnail.setAttribute('src', `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`);
		});
		
		thumbnail.addEventListener('mouseout', () => {
			const videoId = getVideoId(thumbnail.parentNode.getAttribute('data-video'));
			thumbnail.setAttribute('src', `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`);
		});
	});
}

function getVideoId(video) {
	// Aquí se puede modificar la forma en que se obtiene la ID del video de YouTube
	switch (video) {
		//Videos
		case 'Saiko - Supernova (Official Video)':
			return 'BbZi8xGMyuM';
		case 'EL NUEVO EA SPORTS FC 24 !!! ADIOS FIFA ... DjMaRiiO':
			return '1hd9E9DYC7U';
		case 'CLUB 113 | EPISODIO 53 EL XOKAS':
			return '8Q10pNThpF4';

		case 'Hola YouTube':
			return 'MxCYv_m3UFk';
		case 'NATOS | SELECTA Motorseries #01':
			return 'BW5Iq814xlE';
		case 'Así es la Dura Vida en Alaska | Estados Unidos':
			return 'gE0CGqtySUE';
		
		//Series
		case 'Aquí no hay quien viva - T1 Capítulo 1: Érase una mudanza':
			return 'nEPCaaMLd9Q';
		case 'Prendí la calle desde la prisión | 30 Días con: Anuel':
			return 'cRVRbUAvkRw';
		case 'DISASTER CHEFS 2 #1 | Garbanzos, Berenjena Y Menú':
			return 'IV9gx6LV57Y';

		case 'Club 113 | EPISODIO 5 HACKERS':
			return 'oMMa42e_b34';
		case 'SOLO en los PEORES BARRIOS de PALMA | Son Gotleu & Corea':
			return '7Ql5wGkrpWA';
		case '24 horas con Myke Towers justo antes del lanzamiento de “La vida es una” | GQ España':
			return 'jsnspXF8qxs';

		//Peliculas
		case 'Todo a la vez en todas partes':
			return 'LB9nQCi_zEg';
		case 'Coraline y la puerta secreta':
			return 'v55PruG5k2w';
		case 'Top Gun: Maverick':
			return 'HS0XQqI-eyo';

		case 'Orgullo y prejuicio':
			return '4tDAcZifw5I';
		case 'Titanic':
			return 'kxtBO5gwKmM';
		case 'Ben Hur':
			return '6Uk0DKnJ_AU';
		default:
			return '';
	}
}

// Obtiene los elementos HTML que vamos a necesitar
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const thumbnails = document.getElementsByClassName('thumbnail');
 
// Agrega un evento click al botón de búsqueda
searchButton.addEventListener('click', () => {
// Obtiene el término de búsqueda
const searchTerm = searchInput.value.toLowerCase();

// Recorre cada thumbnail y verifica si contiene el término de búsqueda
for (let i = 0; i < thumbnails.length; i++) {
	const thumbnail = thumbnails[i];
	const title = thumbnail.querySelector('h3').textContent.toLowerCase();
	const description = thumbnail.querySelector('p').textContent.toLowerCase();
	const url = thumbnail.getAttribute('data-video-url');

	if (title.includes(searchTerm) || description.includes(searchTerm)) {
	thumbnail.style.display = 'block';
	} else {
	thumbnail.style.display = 'none';
	}
}
});

 const microphone = document.getElementById('start-button');
 // Habilitar la API Speech
 const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 const recognition = new SpeechRecognition();
 
 // Configurar la API Speech
 recognition.lang = 'es-ES'; // Configura el lenguaje a español
 recognition.continuous = false; // Para detener la grabación después de que se haya detectado un resultado
 
 // Agregar un evento click al botón de búsqueda
 microphone.addEventListener('click', () => {
	 recognition.start(); // Comenzar a grabar
 });
 
 // Escuchar los resultados de la grabación
 recognition.onresult = (event) => {
	 const result = event.results[0][0].transcript; // Obtener el texto de la grabación
	 searchInput.value = result; // Asignar el texto al campo de búsqueda
 };
