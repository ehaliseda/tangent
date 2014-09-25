$(document).ready(function() {
	
	var project = $('div.project'),
	    projectHeight = project.outerHeight(true),
	    anim = $('.anim');

	anim.hide();

	$('button').click(function() {
		
		project.animate({ 
			height: projectHeight,
		},400, 'linear', 

		function() { // show animation one after the other
			anim.each(function(i) {
			    $(this).delay(400*i).fadeIn(300);
			}); // callback

		}); // animate

	}); // click

}); // .ready