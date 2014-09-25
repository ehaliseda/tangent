$('button').on('click', function(){

	var h = $('section.slide-panel').height();
	$('section.slide-panel').animate({
		right : '0',
		width : '100%',
	},700,'easeOutCirc');


});