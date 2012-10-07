// once jquery is loaded
$(function(){
	// defining vars
	var	_logo = $('#logo'),
	_portfolio_item,
	_section_menu,
	_columns;
	// declare object
	pages.portfolio_item = {};
	// declare init fn
	pages.portfolio_item.init = function()
	{
		// deassign variables
		_portfolio_item = $('.current-page').find('.portfolio-item'),
		_section_menu = _portfolio_item.find('.section-menu'),
		_columns = _portfolio_item.find('.column');
		// when everything is loaded
		$.fs_load(function(){
			// stick top menu
			_section_menu.fs_sticky_top({
				scroll_active_fn: function(){
					_logo.stop().animate({'marginTop': '50px'}, 300);
				},
				scroll_deactive_fn: function(){
					if( !gCache.body.hasClass('mobile') && !gCache.body.hasClass('tablet-small') && !gCache.body.hasClass('loaded-tablet') )
					{
						_logo.stop().animate({'marginTop': '20px'}, 300);
					}
					else
					{
						_logo.stop().animate({'marginTop': '0'}, 300);
					}
				}
			});
			// run anker fn
			_section_menu.find('a').fs_anker();
			// run equal height
			setTimeout(function() 
			{
				_columns.fs_equal_height();
			}, 100);
			
			_portfolio_item.find('.slideshow').fs_slides({'max_width':650, 'min_height': 150});
	
		});
		//
		gCache.window.fs_resize(function()
		{
			_columns.fs_equal_height();
		});
	};
	
	pages.portfolio_item.destory = function(){
		_section_menu.fs_sticky_top('destory');
		_portfolio_item.find('.slideshow').fs_slides('destroy');
	};
	
	
	pages.portfolio_item.init();
	//
});