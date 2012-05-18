$(function()
{
	$(window).load( function() {
		var body_height 	= $('body').height();
		var stage_height 	= $('#stage').outerHeight();
	
		if($(document).height() > stage_height)
		{
			stage_height 	= $(document).height();
			$('body, #stage').css('minHeight', stage_height);
		}
	});
	
});