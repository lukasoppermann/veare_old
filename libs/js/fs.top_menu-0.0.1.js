// jquery top menu fn
//
;(function($) {
	
	$.fn.fs_top_menu = function(){
		// check for safari
		if( $.browser.safari )
		{
			// if safari, use body
			var _scroll_body = $("body");
		}
		else
		{
			// else use html body
			var _scroll_body = $("html,body");
		}
		// cache selection
		var _this = $(this);
		// loop through selection
		_this.each(function()
		{
			// cache selection
			var _this = $(this);
			console.log('-- '+this.hash);
			console.log(this.location.href);
			// if ( this.hash.replace(/#/,'') ) 
			// {
			// 	var $target = $(this.hash), target = this.hash;
			// 	if (target)
			// 	{
			// 		$(this).click(function(event)
			// 		{
			// 	 		event.preventDefault();
			// 	 		var targetOffset =  Math.round($target.offset().top);
			// 	 		$(scrollElem).animate({scrollTop: targetOffset-70}, 400);
			// 		});
			// 		  	}
			// }
		});
		
	}
//
})(jQuery);