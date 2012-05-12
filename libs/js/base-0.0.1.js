$(function()
{
	$(document).ready( function() {
		var body_height 	= $('body').height();
		var stage_height 	= $('#stage').outerHeight();
	
		if( body_height < stage_height)
		{
			$('body').height(stage_height);
		}
	});
	
});