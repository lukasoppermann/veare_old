// ----------------------------------------------------
// Slideshow Class
//
// dependencies
//
// TODO:
// - add possibility to include different effects
// - add previous and next via click on right / left half
// - add animation for caption
// ----------------------------------------------------
// define functions 
;(function( $, window, document )
{
	var _this, _window, _current, _next, _previous, _first, remaining, _wrap, _images, autoplay, start;
	// methods
	var methods = {
		// settings object
		settings: {},
		// initialize gallery class
		init: function( settings ) 
		{ 
			// Extend default options with those provided
			methods.settings = $.extend({}, $.fn.fs_slides.defaults, settings);
			// set remaining time to total time
			remaining = methods.settings.speed; 
			// chache selection
			_this 		= $(this);
			_window 	= $(window);
			_document = $(document);
			_images 	= _this.find(methods.settings.image);
			_first 		= _images.first();
			_wrap 		= _this.find(methods.settings.wrap);
			// check height and width
			if( methods.settings.width == 0 ){ methods.settings.width = _this.width(); }
			if( methods.settings.height == 0 ){ methods.settings.height = _this.height(); }
			// resize slider
			_this.css({'height':methods.settings.height});
			// add click event for move
			_this.on({
				click: function()
				{
					methods.next.apply(this);
					// reset time
					methods.reset();
					// save start time
					start = new Date();
				},
				mouseenter: function()
				{
					methods.pause.apply(this);
				},
				mouseleave: function()
				{
					methods.resume.apply(this);
				}
			});
			// on load events
			_document.ready(function()
			{
				if( window.load !== false || window.load === undefined)
				{
					// set width of wrapper element
					_wrap.width(_images.length*methods.settings.width);
					// start loading images
					methods.load(_first);
					// start autoplay
					methods.autoplay();
				}
			});
		},
		load: function( image )
		{
			// cache img selection
			var _img = image.find('img');
			//
			if( !_img.attr('src') && _img.attr('src') != _img.attr('data-src') )
			{
				// load image
				_img.attr('src', _img.data('src')).load(function()
				{
					// once image is loaded
					image.addClass('loaded');
					methods.load(image.next(methods.settings.image));
				});
			}
		},
		// adding autoplay
		autoplay: function()
		{
			// save start time
			start = new Date();
			// start slideshow
			methods.resume();
		},
		// stop autoplay
		pause: function()
		{
			// remove autoplay
			window.clearInterval(autoplay);
			// save remaining time
			remaining -= new Date() - start;
		},
		// reset autoplay duration
		reset: function()
		{
			// reset remaining time
			remaining = methods.settings.speed;
			// remove autoplay
			window.clearInterval(autoplay);
			// add autoplay with reset time
			autoplay = window.setInterval(methods.next, remaining);
		},
		// resume autoplay
		resume: function()
		{
			// remove autoplay
			window.clearInterval(autoplay);
			// resume autoplay
			autoplay = window.setInterval(function()
			{
				// move to next slide
				methods.next();
				// reset time
				methods.reset();
				// save start time
				start = new Date();
				//
			}, remaining);
		},
		// move to next element
		next: function()
		{
			// set current and next item
			_current = _this.find('.'+methods.settings.active);
			_next 	= _current.next(methods.settings.image);
			//
			if( _next.length > 0 )
			{
				// anmiate forward
				_wrap.animate({'left':'-='+methods.settings.width});
				// change active
				_current.removeClass(methods.settings.active);
				_next.addClass(methods.settings.active);
			}
			else
			{
				// anmiate to first
				_wrap.animate({'left':'0'});
				// change active
				_current.removeClass(methods.settings.active);
				_first.addClass(methods.settings.active);
			}
		},
		// move to previous element
		previous: function()
		{
			// // set current and previous item
			// _current = _this.find('.'+methods.settings.active);
			// _next 	= _current.prev(methods.settings.image);
			// //
			// _wrap.animate({'left':'+='+methods.settings.width});
			// _this.find('.'+methods.settings.active).removeClass(methods.settings.active).prev(methods.settings.image).addClass(methods.settings.active);
		}
	}
	//-------------------------------------------
	// default options		
	$.fn.fs_slides = function( method )
	{
		// Method calling logic
		if ( methods[method] ) 
		{
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} 
		else if ( typeof method === 'object' || ! method ) 
		{
			return methods.init.apply( this, arguments );
		}
		else
		{
			$.error( 'Method ' +  method + ' does not exist on jQuery.fs_slides' );
		}
	}
	//-------------------------------------------
	// default options
	$.fn.fs_slides.defaults = {
		fx: 					'slide',
		loaded: 			'loaded',
		active: 			'active',
		wrap: 				'.image-wrap',
		image: 				'.slide',
		width: 				0,
		height: 			350,
		speed: 				5000,
		easing: 			'swing'
	};
})( jQuery, window, document);