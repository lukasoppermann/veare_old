// ----------------------------------------------------
// Slideshow Class
//
// dependencies:
//
// TODO:
// - add possibility to include different effects
// - add previous and next via click on right / left half
// - add animation for caption
// ----------------------------------------------------
// define functions 
;(function( $, window, document )
{
	// methods
	var methods = {
		// initialize gallery class
		init: function( settings ) 
		{ 
			return $(this).each(function(){
				// set variables
				var _this = $(this),
						data 	= _this.data('slideshow'),
						opts 	= $.extend({}, $.fn.fs_slides.defaults, settings);
				// check if it needs to be initializes
				if( !data )
				{
					_this.data('slideshow', {
						target: 		_this,
						opts: 			opts,
						remaining: 	opts.speed,
						images: 		_this.find(opts.image),
						first: 			_this.find(opts.image).first(),
						wrap: 			_this.find(opts.wrap)
					});
				}
				// check height and width
				if( opts.width == 0 ){ _this.data('slideshow').opts.width = _this.width(); }
				if( opts.height == 0 ){ _this.data('slideshow').opts.height = _this.height(); }
				// add click event for move
				_this.on({
					click: function()
					{
						methods.next(_this);
						// reset time
						methods.reset(_this);
						// save start time
						_this.data('slideshow').start = new Date();
					},
					mouseenter: function()
					{
						methods.pause(_this);
					},
					mouseleave: function()
					{
						methods.resume(_this);
					}
				});
				// on load events
				$(document).ready(function()
				{
					// set width of wrapper element
					_this.data('slideshow').wrap.width(_this.data('slideshow').images.length*_this.data('slideshow').opts.width);
					// height
					if( _this.data('slideshow').opts.min_height !== 0)
					{
						_this.css({'height': _this.data('slideshow').opts.min_height});
					}
					// start loading images
					methods.load(_this, _this.data('slideshow').first);
					// start autoplay
					methods.autoplay(_this);
				});
			});
		},
		refresh: function(_this)
		{
			// height
			_this.data('slideshow').opts.height = _this.css('height');
			// width
			if( _this.data('slideshow').opts.max_width == 0 || _this.data('slideshow').opts.max_width >= _this.parent().width())
			{
				_this.data('slideshow').opts.width = _this.parent().width();
			}
			else
			{
				_this.data('slideshow').opts.width = _this.data('slideshow').opts.max_width;
			}
			// set image width
			_this.data('slideshow').images.width(_this.data('slideshow').opts.width);
			_this.css({'width':_this.data('slideshow').opts.width});
			// set first active
			methods.first(_this);
		},
		load: function(_this, image )
		{
			// cache img selection
			var _img = image.find('img');
			//
			if( !_img.attr('src') && _img.attr('src') != _img.attr('data-src') )
			{
				// load image
				_img.attr('src', _img.data('src')).load(function()
				{
					// get height
					if( _this.data('slideshow').opts.height == 0)
					{
						_this.data('slideshow').opts.height = image.css('height');
					}
					// get width
					if( _this.data('slideshow').opts.width == 0 && _this.data('slideshow').opts.max_width != 0 )
					{
						_this.data('slideshow').opts.width = _this.data('slideshow').opts.max_width;
					}
					else
					{
						_this.data('slideshow').opts.width = image.css('width');
					}
					// reset size
					_this.css({'width':_this.data('slideshow').opts.width,'height':'auto'});
					// once image is loaded
					image.addClass('loaded');
					methods.load(_this, image.next(_this.data('slideshow').image));
				});
			}
		},
		// adding autoplay
		autoplay: function(_this)
		{
			// save start time
			_this.data('slideshow').start = new Date();
			// start slideshow
			methods.resume(_this);
		},
		// stop autoplay
		pause: function(_this)
		{
			// remove autoplay
			window.clearInterval(_this.data('slideshow').autoplay);
			// save remaining time
			_this.data('slideshow').remaining -= new Date() - _this.data('slideshow').start;
		},
		// reset autoplay duration
		reset: function(_this)
		{
			// reset remaining time
			_this.data('slideshow').remaining = _this.data('slideshow').opts.speed;
			// remove autoplay
			window.clearInterval(_this.data('slideshow').autoplay);
			// add autoplay with reset time
			_this.data('slideshow').autoplay = window.setInterval(function(){
				methods.next(_this)
			}, _this.data('slideshow').remaining);
		},
		// resume autoplay
		resume: function(_this)
		{
			// remove autoplay
			window.clearInterval(_this.data('slideshow').autoplay);
			// resume autoplay
			_this.data('slideshow').autoplay = window.setInterval(function()
			{
				// move to next slide
				methods.next(_this);
				// reset time
				methods.reset(_this);
				// save start time
				_this.data('slideshow').start = new Date();
				//
			}, _this.data('slideshow').remaining);
		},
		// move to next element
		next: function(_this)
		{
			// set current and next item
			var _current = _this.find('.'+_this.data('slideshow').opts.active);
			var _next 	= _current.next(_this.data('slideshow').opts.image);
			//
			if( _next.length > 0 )
			{
				// anmiate forward
				_this.data('slideshow').wrap.animate({'left':'-='+_this.data('slideshow').opts.width});
				// change active
				_current.removeClass(_this.data('slideshow').opts.active);
				// set next to active
				_next.addClass(_this.data('slideshow').opts.active);
			}
			else
			{
				// anmiate to first
				_this.data('slideshow').wrap.animate({'left':'0'});
				// change active
				_current.removeClass(_this.data('slideshow').opts.active);
				_this.data('slideshow').first.addClass(_this.data('slideshow').opts.active);
			}
		},
		// set first active
		first: function(_this)
		{
			// set current item
			_this.data('slideshow').current = _this.find('.'+_this.data('slideshow').opts.active);
			// anmiate to first
			_this.data('slideshow').wrap.animate({'left':'0'});
			// change active
			if( _this.data('slideshow').current != undefined )
			{
				_this.data('slideshow').current.removeClass(_this.data('slideshow').opts.active);
			}
			// set first active
			_this.data('slideshow').first.addClass(_this.data('slideshow').opts.active);
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
			return $(this).each(function(){
				 methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			});
		} 
		else if ( typeof method === 'object' || ! method ) 
		{
			return $(this).each(function(){
				methods.init.apply( this, arguments );
			});
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
		height: 			0,
		max_width: 		0,
		min_height:   0,
		speed: 				5000,
		easing: 			'swing'
	};
})( jQuery, window, document);