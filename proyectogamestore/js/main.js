function events() {
    $("autopromo").setInterval(changeBanner, 12000);
}

function changeBanner() {
    $("autopromo").replaceChild("../img/autopromo/", oldChild);
}

function $(id) {
    return document.getElementById(id);
}

window.onload = events;