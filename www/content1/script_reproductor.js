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
		case 'video1':
			return '0wqteZNqruc';
		case 'video2':
			return '0wqteZNqruc';
		case 'video3':
			return 'UPPZlP9K1tM';
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