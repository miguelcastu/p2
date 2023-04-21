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