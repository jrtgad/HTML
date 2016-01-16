function $(id) {
    return document.getElementById(id);
}

function takePic() {
    var canvas = $("visor"),
        context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, $("video").offsetWidth, $("video").offsetHeight);
    var url = canvas.toDataURL();
    $("imgTop").src = url;
}

function getCanvas() {

    var userMedia = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
    });

    userMedia.then(function (mediaStream) {
        var video = $("video"),
            canvas = $("visor");
        video.src = window.URL.createObjectURL(mediaStream);
        video.onloadedmetadata = function (e) {
            canvas.width = video.clientWidth;
            canvas.height = video.clientHeight;
            canvas.addEventListener("click", takePic, false);
        };
    });

    //.catch(function (error) {...})

    $("visor").width = $("video").offsetWidth;
    $("visor").height = $("video").offsetHeight;
}

window.onload = getCanvas;