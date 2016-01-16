$(document).ready(function () {
    var menuElements = $("nav ul li");

    /** Añadir clases sin más */
    $("*").addClass("reset");

    $("nav").addClass("completeWidth centered");

    $("h2").addClass("centered grayText");

    $("figcaption").addClass("centered grayText hidden");

    $("form").addClass("centered").css("background", "silver");

    $("img").addClass("imgSize");

    $("section:last").addClass("azulClaro centered");

    $("section:first").addClass("margin");

    $("section h1").addClass("centered capitalize bigFont");

    $("section ul").addClass("centered");

    $("article").height("250px");

    $("section").addClass("completeWidth");

    $("section:first").addClass("azulOscuro");

    $("section ul li").addClass("azulClaro articlePosition").css("margin-bottom", "0.5em");


    /** Centrar contenido */

    $("body").css({
        width: "960px",
        margin: "0 auto",
        background: "Cornsilk"
    });

    /** Animaciones y hover elementos menú */

    menuElements.addClass("menu buttonWidth transparent pointer reset capitalize").hover(function () {
        $(this).css("opacity", "1");
    }, function () {
        $(this).css("opacity", "0.5");
    }).click(function () {
        $(this).animate({
            width: "10em",
            color: "green"
        }, 150, "linear", function () {
            $(this).after($(this).animate({
                width: "14em",
                color: "black"
            }, 150));
        });
    });;


    /** Añadir precio a nombre de la embarcación */
    $("section ul li article").each(function (x) {
        var article = "section ul li article:eq(" + x + ")",
            figcaption = "section ul li article figure figcaption:eq(" + x + ")";

        $(figcaption).each(function (y) {
            $(figcaption).text($(figcaption).text() + ": " + $(article).data("price"));
        });
    });


    /** Mostrar u ocultar nombre y precio embarcación */
    $("section ul li article").each(function (x) {
        var article = "section ul li article:eq(" + x + ")",
            figcaption = "section ul li article figure figcaption:eq(" + x + ")";

        $(article).hover(function (x) {
            $(figcaption).toggleClass("hidden");
        }, function () {
            $(figcaption).toggleClass("hidden");
        })
    });


    /** Crear span muestra de precio por metros */
    $("form").append($("<span></span>").addClass("hidden block"));

    /** Añadir validación span precio por metros */
    $("input").on("keyup", $("form"), function () {
        var pattern = /[0-9]+/;
        if (isNaN($(this).val())) {
            $("span").text("");
        } else {
            if (pattern.test($(this).val()) && !isNaN($(this).val())) {
                $("span").text("Initial price: " + $("input").val() * 12345 + " €").removeClass("hidden");
            } else {
                $("span").text("0");
            }
        }
    }).on('blur', function () {
        if ($("span").text() === "0") {
            $("span").addClass("hidden");
        }
    });


    /** Centrar lista de footer */
    $("footer ul").addClass("menu centered decorationNone").css({
        width: "100%",
        margin: "0 auto"
    });

    /** Quitar primer caracter(") de cada elemento */
    $("footer ul li").each(function () {
        $(this).text($(this).text().substr(1, $(this).text().length - 1));
    }).addClass("capitalize");
});