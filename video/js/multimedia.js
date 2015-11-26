function $(id) {
	return document.getElementById(id);
}

window.onload = active;

function active () {
	$("play").addEventListener("click", playVideo, false);
	$("pause").addEventListener("click", pauseVideo, false);
	$("volup").addEventListener("click", volUpVideo, false);
	$("voldown").addEventListener("click", volDownVideo, false);	
}

function playVideo() {
	$("video").play();
}

function pauseVideo() {
	$("video").pause();
}

function volUpVideo() {
	$("video").play();
}

function volDownVideo() {
	$("video").play();
}