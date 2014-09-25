
$(document).ready(function() {
	
	var project       = $('div.project-1'),
	    projectHeight = project.outerHeight(true),
	    anim          = $('.anim'),
	    trigger       = $('.trigger');

	anim.hide();

	trigger.click(function() {
		
		project.animate({ 
			height: projectHeight,
		},400, 'linear', 

		function() { // show animation one after the other
			anim.each(function(i) {
			    $(this).delay(400*i).fadeIn(300);
			}); // each callback

		}); // animate

		// header css and animations

		trigger.animate({
			fontSize  : '70',
			marginTop : '50',
			left      : '-=50%',
			top       : '-=80px',
		},700,'easeInOutQuart');

	}); // click

}); // .ready





