$(document).ready(function () {
	var menuElements = $("nav ul li");		

	$("nav").addClass("completeWidth");

	menuElements.addClass("menu buttonWidth transparent").mouseover(function (){
		console.log(this);
		$(this).css("opacity","1");
	}).mouseout(function(){
		$(this).css("opacity","0.7");
	});

	$("article").addClass("articlePosition");
});


//ACCEDER A PRECIOS CON DATA

//USAR pseudoclases de css en selectores