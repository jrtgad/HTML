function playVideo() {
    $("video").play();
}

function pauseVideo() {
    $("video").pause();
}

function volUpVideo() {
    $("video").volume += 0.1;
}

function volDownVideo() {
    $("video").volume -= 0.1;
}

function $(id) {
    return document.getElementById(id);
}

function updateProgressBar() {
    var percent = Math.floor((100 / video.duration) * video.currentTime);
    $("bar").value = percent;
}

function active() {
    $("play").addEventListener("click", playVideo, false);
    $("pause").addEventListener("click", pauseVideo, false);
    $("volup").addEventListener("click", volUpVideo, false);
    $("voldown").addEventListener("click", volDownVideo, false);
    $("video").addEventListener("timeupdate", updateProgressBar, false);
}

window.onload = active;