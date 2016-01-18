$(document).ready(function () {
    var menuElements = $("nav ul li"),
        data = "data-setup";

    /** Añadir clases sin más */
    $("*").addClass("reset");

    $("body").addClass("body marginBottom");

    $("nav").addClass("completeWidth centered marginTop");

    $("h2").addClass("centered orangeText");

    $("h1").addClass("centered capitalize bigFont orangeText");

    $("figcaption").addClass("centered orangeText hidden bold");

    $("form").addClass("centered orangeBackground bigFont").children().addClass("bigHeight blueText");

    $("img").addClass("imgSize");

    $("section:last").addClass("azulOscuro centered");

    $("section:first").addClass("marginTop");

    $("section h1").addClass("centered capitalize bigFont");

    $("section ul").addClass("centered");

    $("article").addClass("articleHeight");

    $("article h2").addClass("hidden");

    $("section").addClass("completeWidth");

    $("section:last").addClass("centered");

    $("section:first").addClass("azulOscuro");

    $("section ul li").addClass("azulClaro articlePosition").css("margin-bottom", "0.5em");


    /** Animaciones y hover elementos menú */
    menuElements.addClass("menu transparent pointer reset capitalize button border marginTop").hover(function () {
        $(this).toggleClass("transparent");
    }, function () {
        $(this).toggleClass("transparent");
    }).click(function () {
        $(this).animate({
            width: "10em",
            height: "3em"
        }, 200, "linear", function () {
            $(this).after($(this).animate({
                width: "14.4em",
                height: "1.4em"
            }, 150));
        });
    });;


    /** Añadir alt a cada imagen de embarcación y cambiar fondo al hacer click */
    $("img").each(function (x) {
        var element = "img:eq(" + x + ")";
        $(element).attr("alt", "Embarcación " + (x + 1) + " de " + $("img").length + "(" + $(this).parent().prev().text() + ")");
    }).addClass('pointer').on("click", function () {
        $("img").parent().parent().removeClass("yellowBackground");
        $(this).parent().parent().addClass("yellowBackground");
    });


    /** Añadir precio a nombre de la embarcación y mostrarlo con hover */
    $("section ul li article").each(function (x) {
        var article = "section ul li article:eq(" + x + ")",
            figcaption = "section ul li article figure figcaption:eq(" + x + ")";

        $(figcaption).each(function (y) {
            $(figcaption).text($(figcaption).text() + ": " + $(article).data("price") + " €");
        });

        $(this).hover(function (x) {
            $(figcaption).toggleClass("hidden");
            $(article).children("h2").toggleClass('hidden');
        }, function () {
            $(figcaption).toggleClass("hidden");
            $(article).children("h2").toggleClass('hidden');
        });
    })


    /** Crear span muestra de precio por metros */
    $("form").append($("<span></span>").addClass("hidden block noDisplay")).children("span").addClass("blueText");

    /** Añadir validación span precio por metros */
    $("input").on("keyup", $("form"), function () {
        var pattern = /[0-9]+/;
        if (isNaN($(this).val())) {
            $("span").text("");
        } else {
            if (pattern.test($(this).val()) && !isNaN($(this).val())) {
                $("span").text("Initial price: " + $("input").val() * 12345 + " €").removeClass("hidden noDisplay");
            } else {
                $("span").text("0");
                $("span").addClass("hidden noDisplay");
            }
        }
    });

    /** Framework video */
    $("head").append("<link href=\"http://vjs.zencdn.net/5.4.6/video-js.css\" rel=\"stylesheet\">");
    $("head").append("<script src=\"http://vjs.zencdn.net/ie8/1.1.1/videojs-ie8.min.js\"></script>");
    $("head").append("<script src=\"http://vjs.zencdn.net/5.0/video.min.js\"></script>");

    $("video").attr({
        id: "my-video",
        preload: "auto"
    }).addClass("video-js vjs-default-skin centered").attr("data-setup", "{}");

    $("section:last").append("<script src=\"http://vjs.zencdn.net/5.4.6/video.js\"></script>");



    /** Centrar lista de footer y quitar primer caracter(") de cada texto */
    $("footer ul").addClass("menu centered decorationNone orangeBackground").css({
        width: "100%",
        margin: "0 auto"
    }).children().each(function () {
        $(this).text($(this).text().substr(1, $(this).text().length - 1));
        $(this).addClass("blueText");
    }).addClass("capitalize").css("border", "none");
});