/*jslint browser: true */
/*globals $, jQuery, this */
$(document).ready(function () {
    "use strict";
    var menuElements = $("nav ul li"),
        ns = (function (ns) {
            ns.shipName = function (index, itemLength, text) {
                return "Embarcación " + (index + 1) + " de " + itemLength + "(" + text + ")";
            };
            ns.removeFirstLetter = function (element) {
                return element.text().substr(1, element.text().length - 1);
            };
            ns.appendMicrodata = function (element, tag, attribute, value) {
                $("<" + tag + ">" + value + "</" + tag + ">").appendTo(element).attr({
                    itemprop: attribute
                }).addClass("block centered");
            };
            return ns;
        }({}));
    $("*").addClass("reset");
    $("body").addClass("body marginBottom");
    $("nav").addClass("completeWidth centered marginTop navHeight");
    $("h2").addClass("centered orangeText");
    $("h1").addClass("centered capitalize bigFont orangeText");
    $("figcaption").addClass("centered orangeText hidden bold");
    $("form").addClass("centered orangeBackground bigFont").children().addClass("bigHeight blueText");
    $("img").addClass("imgSize");
    $("section:last").addClass("darkBlue centered");
    $("section:first").addClass("marginTop");
    $("section h1").addClass("centered capitalize bigFont padding");
    $("section ul").addClass("centered");
    $("article").addClass("articleHeight");
    $("article h2").addClass("hidden");
    $("section").addClass("completeWidth");
    $("section:last").addClass("centered");
    $("section:first").addClass("darkBlue");
    $("section ul li").addClass("lightBlue articlePosition").css("margin-bottom", "0.5em");
    /** Animaciones y hover elementos menú */
    menuElements.addClass("menu transparent pointer reset capitalize button border marginTop").hover(function () {
        $(this).toggleClass("transparent");
    }, function () {
        $(this).toggleClass("transparent");
    }).click(function () {
        $(this).animate({
            width: "10em",
            height: "2.5em"
        }, 200, "linear", function () {
            $(this).after($(this).animate({
                width: "14.4em",
                height: "1.4em"
            }, 200));
        });
    });
    /** Añadir alt a cada imagen de embarcación y cambiar fondo al hacer click */
    $("img").each(function (index) {
        var element = "img:eq(" + index + ")";
        $(element).attr("alt", ns.shipName(index, $("img").length, $(this).parent().prev().text()));
    }).addClass('pointer').on("click", function () {
        $("img").parent().parent().removeClass("orangeBackground").children('h2').removeClass('blueText').next().children('figcaption').removeClass('blueText');
        $(this).parent().parent().addClass("orangeBackground").children('h2').addClass('blueText').next().children('figcaption').addClass('blueText');
    });
    /** Añadir precio a nombre de la embarcación y mostrarlo con hover */
    $("section ul li article").each(function (index) {
        var article = "article:eq(" + index + ")",
            figcaption = "figcaption:eq(" + index + ")";

        $(figcaption).text($(article).data("price") + " €");

        $(this).hover(function () {
            $(figcaption).toggleClass("hidden");
            $(article).children("h2").toggleClass('hidden');
        }, function () {
            $(figcaption).toggleClass("hidden");
            $(article).children("h2").toggleClass('hidden');
        });
    });
    /** Crear span muestra de precio por metros */
    $("form").append($("<span></span>").addClass("hidden block noDisplay blueText"));
    /** Añadir validación span precio por metros */
    $("input").on("keyup", $("form"), function () {
        var pattern = /[0-9]+/;
        if (isNaN($(this).val())) {
            $("form span").text("");
        } else {
            if (pattern.test($(this).val()) && !isNaN($(this).val())) {
                $("form span").text("Initial price: " + $("input").val() * 12345 + " €").removeClass("hidden noDisplay");
            } else {
                $("form span").text("0");
                $("form span").addClass("hidden noDisplay");
            }
        }
    }).addClass('blueBorder centered cursorText');
    /** Framework video */
    $("head").append("<link href=" +
            "\"http://vjs.zencdn.net/5.4.6/video-js.css\" rel=\"stylesheet\">");
    $("head").append("<script src=" +
            "\"http://vjs.zencdn.net/ie8/1.1.1/videojs-ie8.min.js\"></script>");
    $("head").append("<script src=" +
            "\"http://vjs.zencdn.net/5.0/video.min.js\"></script>");
    $("video").attr({
        id: "my-video",
        preload: "auto"
    }).addClass("video-js vjs-default-skin centered padding").attr("data-setup", "{}");
    $("section:last").append("<script src=" +
            "\"http://vjs.zencdn.net/5.4.6/video.js\"></script>").addClass("paddingBottom");
    /** Centrar lista de footer y quitar primer caracter(") de cada texto */
    $("footer ul").attr({
        itemscope: "",
        itemtype: "https://schema.org/Corporation"
    }).addClass("menu centered decorationNone " +
            "orangeBackground noMargin completeWidth").children().each(function () {
        $(this).text(ns.removeFirstLetter($(this))).contents().wrap("<h3></h3>");
    }).addClass("capitalize noBorder footer blueText smallFont");
    $("footer li+li h3").text("Author").addClass('title').last().remove();
    ns.appendMicrodata($("footer li:first"), "span", "name", "SeaMaster S.L.");
    $("footer li:first").append("<div></div>").next().next().remove();
    $("footer li div").attr({
        itemscope: '',
        itemtype: 'https://schema.org/PostalAddress'
    });
    ns.appendMicrodata($("footer li:first div"), "span", "streetAddress", "Av. del Almte. Julio Guillén Tato, 33");
    ns.appendMicrodata($("footer li:first div"), "span", "postalCode", "03080");
    ns.appendMicrodata($("footer li:first div"), "span", "addressLocality", "Alicante, Spain");
    $("footer div span[itemprop=postalCode").removeClass("block").addClass("paddingRight").next().removeClass("block");
    ns.appendMicrodata($("footer li:first"), "span", "telephone", "(+34) 695 84 22 41");
    ns.appendMicrodata($("footer li:first"), "span", "email", "admin@seamaster.com");
    $("footer li:last").attr({
        itemscope: '',
        itemtype: 'https://schema.org/Person'
    });
    ns.appendMicrodata($("footer li:last"), "span", "name", "Fco. Javier Ruiz-Toledo Gallego");
    ns.appendMicrodata($("footer li:last"), "span", "telephone", "(+34) 91 653 54 88");
    ns.appendMicrodata($("footer li:last"), "span", "email", "jruiztoledog@gmail.com");
    $("footer li:last").append("<div></div>");
    $("footer li div").attr({
        itemscope: '',
        itemtype: 'https://schema.org/PostalAddress'
    });
});