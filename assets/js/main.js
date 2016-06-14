$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['inicio', 'portafolio', 'habilidades', 'sobre-mi', 'contacto'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['inicio', 'portafolio', 'habilidades', 'sobre mi', 'contacto'],
        //showActiveTooltip: true,
        keyboardScrolling: true
    });
});
/*
$(document).ready(function() {
   $('.effectA').addClass("hidden").viewportChecker({
	    classToAdd: 'visibleThing animated fadeInUp',
	    offset: 100
	});   
});
*/


