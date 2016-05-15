var CLIENT_ID = 'c87401e23d531754aada98044bb88d04';

function SoundCloud(){
	//initialize soundcloud object
	SC.initialize({
		client_id: CLIENT_ID	
	});
}


SoundCloud.prototype.setSC = function(query){

	var audioElement = document.getElementById('player');
	var trackElement = document.getElementById('soundcloud-song');
	var streamURL;

	
	SC.get('/tracks', {q: query}).then(function(tracks){
		
		SC.resolve(tracks[0].permalink_url).then(function(track){

			stream_url = track.stream_url + '?client_id=' + CLIENT_ID;
		
			audioElement.setAttribute("src", stream_url);
			audioElement.load();
			audioElement.play();

			trackElement.innerHTML = track.title;
			trackElement.setAttribute("href", track_url);

		 });
	})

}