// once jquery is loaded
$(function(){
	var _window = $(window);
	// when everything is loaded
	_window.load(function(){
		// make section menu stick to top
		var _section_menu = $('.section-menu');
		var section_menu_top = _section_menu.offset().top;
		var section_menu_top_active = section_menu_top + _section_menu.height()+10;
		var menu_fixed = false;
		// on scroll
		if( !$('body').hasClass('mobile') )
		{
			if(section_menu_top_active < _window.scrollTop())
			{
				if( menu_fixed == false )
				{
					menu_fixed = true;
					_section_menu.addClass('fixed').animate({'top':0}, 500);
					$('#logo').stop().animate({'marginTop': '40px'}, 300);
				}
			}
			else if( section_menu_top > _window.scrollTop())
			{
				menu_fixed = false;
				_section_menu.removeClass('fixed').attr('style','');
				$('#logo').stop().animate({'marginTop': '20px'}, 300);
			}
			_window.scroll(function(){
				if(section_menu_top_active < _window.scrollTop())
				{
					if( menu_fixed == false )
					{
						menu_fixed = true;
						_section_menu.addClass('fixed').animate({'top':0}, 500);
						$('#logo').stop().animate({'marginTop': '40px'}, 300);
					}
				}
				else if( section_menu_top > _window.scrollTop())
				{
					menu_fixed = false;
					_section_menu.removeClass('fixed').attr('style','');
					$('#logo').stop().animate({'marginTop': '20px'}, 300);
				}
			});
		}
	
	function filterPath(string) {
	  return string
	    .replace(/^\//,'')
	    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
	    .replace(/\/$/,'');
	 }
	  var locationPath = filterPath(location.pathname);
	  var scrollElem = scrollableElement('html', 'body');
 
	  $('a[href*=#]').each(function() {
	    var thisPath = filterPath(this.pathname) || locationPath;
	    if (  locationPath == thisPath
	    && (location.hostname == this.hostname || !this.hostname)
	    && this.hash.replace(/#/,'') ) {
	      var $target = $(this.hash), target = this.hash;
	      if (target) {
	        $(this).click(function(event) {
				 var targetOffset =  Math.round($target.offset().top);
	          event.preventDefault();
	          $(scrollElem).animate({scrollTop: targetOffset-60}, 400);
	        });
	      }
	    }
	  });
 
	  // use the first element that is "scrollable"
	  function scrollableElement(els) {
	    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
	      var el = arguments[i],
	          $scrollElement = $(el);
	      if ($scrollElement.scrollTop()> 0) {
	        return el;
	      } else {
	        $scrollElement.scrollTop(1);
	        var isScrollable = $scrollElement.scrollTop()> 0;
	        $scrollElement.scrollTop(0);
	        if (isScrollable) {
	          return el;
	        }
	      }
	    }
	    return [];
	  }
	});
});