// once jquery is loaded
$(function(){
	// defining vars
	var _window = $(window);
	var _logo = $('#logo');
	// defining functions
	// section menu
	var section_menu = function()
	{	
		var _section_menu = $('.section-menu');
		// function
		var activate_menu = function()
		{
			if(section_menu_top_active < _window.scrollTop())
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
		if( !$('body').hasClass('mobile') && !$('body').hasClass('loaded-tablet') )
		{
			// make section menu stick to top
			var section_menu_top = _section_menu.offset().top;
			var section_menu_top_active = section_menu_top + _section_menu.height()+10;
			var menu_fixed = false;
			// run activate_menu
			activate_menu();
			// bind scroll fn
			_window.scroll(activate_menu);
		}
		else
		{
			_logo.stop().attr('style', '');
			_section_menu.removeClass('fixed').attr('style','');
			_window.unbind("scroll", activate_menu);
		}
	}
	// when everything is loaded
	_window.load(function(){
	
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
				 	$(scrollElem).animate({scrollTop: targetOffset-60}, 400);
			});
		  }
		}
		});
	});
	
	_window.fs_resize(function(){
		section_menu();
	});
});