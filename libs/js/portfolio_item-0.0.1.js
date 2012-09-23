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
		
		$('.column').fs_equal_height();
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
		
		$('.slideshow').fs_slides();
		
		// function filterPath(string) {
		// 	return string.replace(/^\//,'')
		// 	.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		// 	.replace(/\/$/,'');
		// }
		// 
		// var locationPath = filterPath(location.pathname);
		// 
		// if($.browser.safari)
		// {
		// 	scrollElem = $("body");
		// }
		// else
		// {
		// 	scrollElem = $("html,body");
		// }
		// $('a[href*=#]').each(function()
		// {
		// 	var thisPath = filterPath(this.pathname) || locationPath;
		// 	if (  locationPath == thisPath
		// 		&& (location.hostname == this.hostname || !this.hostname)
		// 		&& this.hash.replace(/#/,'') ) 
		// 	{
		// 		var $target = $(this.hash), target = this.hash;
		// 		if (target)
		// 		{
		// 			$(this).click(function(event)
		// 			{
		// 		 		event.preventDefault();
		// 		 		var targetOffset =  Math.round($target.offset().top);
		// 		 		$(scrollElem).animate({scrollTop: targetOffset-70}, 400);
		// 			});
		//   	}
		// 	}
		// });
		
	});
	//
	// _body.on('resolutionChange', function(e, resolution)
	// {
	// 	_section_menu.fs_sticky_top()
	// });
	
	_window.fs_resize(function(){
		$('.column').fs_equal_height();
		 
	});
});