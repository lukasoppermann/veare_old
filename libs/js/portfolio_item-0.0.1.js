// once jquery is loaded
$(function(){
	// defining vars
	var _window = $(window),
			_logo = $('#logo'),
			_body = $('body'),
			_section_menu = $('.section-menu');
	// defining functions
	// section menu
	
	// ------------------------------------------------------
	//
	// when everything is loaded
	_window.load(function(){
		setTimeout(function() 
		{
			$('.column').fs_equal_height();
		}, 100);
		// stick top menu
		_section_menu.fs_sticky_top({
			scroll_active_fn: function(){
				_logo.stop().animate({'marginTop': '50px'}, 300);
			},
			scroll_deactive_fn: function(){
				if( !_body.hasClass('mobile') && !_body.hasClass('tablet-small') && !_body.hasClass('loaded-tablet') )
				{
					_logo.stop().animate({'marginTop': '20px'}, 300);
				}
				else
				{
					_logo.stop().animate({'marginTop': '0'}, 300);
				}
			}
		});
		
		_section_menu.find('a').fs_anker();
		
		$('.slideshow').fs_slides({'max_width':650, 'min_height': 150});
	
	});
	//
	
	_window.fs_resize(function()
	{
		$('.column').fs_equal_height();
	});
});