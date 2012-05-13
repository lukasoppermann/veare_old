$(function()
{
	// -----------------------
	// define variables
	var _about 				= $('#about_author');
	var _post_container 	= $('#post_container');
	// -----------------------
	// 
	_about.css( {'marginTop': -_about.outerHeight()+20} );
	//
	_post_container.css({'minHeight':_post_container.find('.main-headline').width()+100});
	// -----------------------
	_about.on('click', function()
	{
		if( _about.hasClass('hidden') )
		{
			_about.animate({'marginTop':0}, 300);
			_about.removeClass('hidden');
		}
		else
		{
			_about.animate( {'marginTop': -_about.outerHeight()+28}, 300 );		
			_about.addClass('hidden');
		}
	});
});