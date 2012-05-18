$(function()
{
	// -----------------------
	// define variables
	var _post_container 	= $('#post_container');
	// -----------------------
	$('.code').each(function(){
		$(this).css('height', $(this).find('pre').outerHeight());
	})

});