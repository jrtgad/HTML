var cont = 0, archivos = ["img/Fotos/autopromo/nba16.jpg", "video"];

function events() {
    var tiempo = setInterval(changeBanner, 12000);
}

function changeBanner() {
    if(cont === archivos.length) {
    	cont = 0;
    }
    $("fotopromo").src = archivos[cont];
    cont++;
}

function $(id) {
    return document.getElementById(id);
}

window.onload = events;