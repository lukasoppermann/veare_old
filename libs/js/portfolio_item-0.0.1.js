// once jquery is loaded
$(function(){
	// defining vars
	var _window = $(window),
			_logo = $('#logo'),
			_body = $('body');
	// defining functions
	// section menu
	var section_menu = function()
	{	
		var _section_menu = $('.section-menu');
		// function
		activate_menu = function()
		{
			if(section_menu_top_active < _window.scrollTop() && !_body.hasClass('mobile') && !_body.hasClass('tablet-small') && !_body.hasClass('loaded-tablet'))
			{
				if( menu_fixed == false )
				{
					menu_fixed = true;
					_section_menu.addClass('fixed').animate({'top':0}, 500);
					_logo.stop().animate({'marginTop': '50px'}, 300);
				}
			}
			else if( section_menu_top > _window.scrollTop())
			{
				menu_fixed = false;
				_section_menu.removeClass('fixed').attr('style','');
				_logo.stop().animate({'marginTop': '20px'}, 300);
			}
		};
		// action
		if( !_body.hasClass('mobile') && !_body.hasClass('tablet-small') && !_body.hasClass('loaded-tablet') )
		{
			// make section menu stick to top
			var section_menu_top = Math.round(_section_menu.offset().top);
			var section_menu_top_active = Math.round(section_menu_top + _section_menu.height()+10);
			var menu_fixed = false;
			// run activate_menu
			activate_menu();
			// bind scroll fn
			_window.bind('scroll', activate_menu);
		}
		else
		{
			_logo.stop().css({'marginTop':'20px'});
			_section_menu.removeClass('fixed').attr('style','');
		}
	}
	// ------------------------------------------------------
	//

	// when everything is loaded
	_window.load(function(){
		
		$('.column').fs_equal_height();
		
		section_menu();
		
		function filterPath(string) {
			return string.replace(/^\//,'')
			.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
			.replace(/\/$/,'');
		}
		
		var locationPath = filterPath(location.pathname);
		if($.browser.safari) scrollElem = $("body") 
		else scrollElem = $("html,body")
		$('a[href*=#]').each(function() {
		var thisPath = filterPath(this.pathname) || locationPath;
		if (  locationPath == thisPath
		&& (location.hostname == this.hostname || !this.hostname)
		&& this.hash.replace(/#/,'') ) {
			 var $target = $(this.hash), target = this.hash;
			if (target) {
				$(this).click(function(event) {
				 	event.preventDefault();
				 	var targetOffset =  Math.round($target.offset().top);
				 	$(scrollElem).animate({scrollTop: targetOffset-70}, 400);
			});
		  }
		}
		});
	});
	//
	_body.on('resolutionChange', function(e, resolution)
	{
		section_menu();
	});
	
	_window.fs_resize(function(){
		section_menu();
		$('.column').fs_equal_height();
		 
	});
});