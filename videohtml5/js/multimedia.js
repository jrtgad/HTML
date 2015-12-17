function $(id) {
	return document.getElementById(id);
}

function takePic() {
	var canvas = $("visor"),
		context = canvas.getContext("2d");
	context.drawImage(video,1,1,300,150);
}

function getCanvas() {
	var video = $("video");
	$("visor").addEventListener("click", takePic, false);
	//$("visor").width=video.width;
}


window.onload = getCanvas;