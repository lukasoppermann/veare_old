// ----------------------------------------------------
// jQuery centered fn
//
// dependencies
//
// TODO:
// ----------------------------------------------------
// define functions 
;(function( $, window )
{
	// define vars
	var plugin_name = 'fs_centered',
			_this, _window, _body, resize_fn;
	// define methods
	var methods = {
		// settings object
		settings: {},
		// initialize class
		init: function( settings ) 
		{ 
			// Extend default options with those provided
			methods.settings = $.extend({}, $.fn[plugin_name].defaults, settings);
			// cache selection
			_this = $(this);
			_window = $(window);
			_body = $('body');
			// check if this exists
			if( _this != undefined )
			{
				// count sections
				methods.settings.sectionsLength = _this.length;
				// add refresh to resize event
				resize_fn = function(fn){
					clearTimeout( fn );
					fn = setTimeout( methods.refresh, 100);
				};
				_window.on('resize', resize_fn);
				// run refresh fn
				methods.refresh();
			}
		},
		// calc screen dimensions
		screen: function()
		{
			methods.settings.screenHeight = _window.height();
			methods.settings.screenWidth 	= _window.width();
		},
		// refresh calculations for center
		refresh: function()
		{
			// calc screen dimensions
			methods.screen();
			// center elements
			methods.center();
		},
		center: function()
		{
			// adjust body
			_body.height(methods.settings.screenHeight);
			// check any sections exists
			if( methods.settings.sectionsLength > 0 )
			{
				var i = methods.settings.sectionsLength;
				// loop through sections
				_this.each(function(){
					// cache variables
					var cache 							= {};
							cache.this 					= $(this),
							cache.screenHeight 	= methods.settings.screenHeight,
							cache.width 				= 0,
							cache.content 			= cache.this.find(methods.settings.contentSelector);
					// decrease i
					--i;
					// check if last item
					if( i > 0)
					{ 
						// reduce by offset
						cache.screenHeight = cache.screenHeight-methods.settings.offsetBottom;
					}
					else
					{
						// add offset to adjust for shorter frames before
						cache.screenHeight = cache.screenHeight+methods.settings.offsetBottom;
					}
					
					// calculate size
					methods.calc_content( cache );
					// resize sections
					// if section height is smaller than screen height 
					if( cache.screenHeight >= cache.this.height() )
					{
						// if section content height is null or smaller than than screen height
						if( cache.height == null || cache.height <= cache.screenHeight )
						{
							// set section to screen height
							cache.this.height( cache.screenHeight );
						}
						// if section content height is bigger than screen height
						else
						{
							// section to section content height
							cache.this.height( cache.height );
						}
					}
					// if section height is bigger than screen height 
					else
					{
						if( cache.height == null || cache.height <= cache.screenHeight )
						{
							cache.this.height( cache.screenHeight );
						}
						else
						{
							cache.this.height( cache.height );
						}
					}
					// adjust width
					if( cache.width > 0 )
					{
						cache.content.width(cache.width);
					}
					// check if loop is done
					if( i == 0 || typeof(i) == undefined )
					{
						// run callback
						methods.callback();
					}
					// close loop
				});
			}
		},
		// calc content dimensions
		calc_content: function( cache )
		{
			// if content is NOT fixed
			if( !cache.content.hasClass('fixed') )
			{
				// get height
				cache.height = cache.content.css('height','auto').outerHeight();
				// remove height auto
				cache.content.css('height','');
				//
				// get with
				cache.children = cache.content.children();
				cache.width = 0;
				// loop through children
				cache.children.each(function()
				{
					// get width
					var _this = $(this), width;
					// check if element is fixed
					if( _this.hasClass('fixed') )
					{
						width = _this.width();
					}
					else
					{
						// get width
						cache.content.css('width','100%');
						width = _this.css({'display':'inline','width':'auto'}).width();
						cache.content.css('width','');
						// reset
						_this.css({'display':'block','width':''});
					}
							 
					// check max width
					if( width > cache.width )
					{
						cache.width	= width;
					}
				});
			}
			// if content fixed
			else
			{
				cache.height = cache.content.outerHeight();
			}
		},
		callback: function()
		{
			methods.settings.callback();
		}
	};
	
	$.fn[plugin_name] = function( method ){
		// Method calling logic
		if ( methods[method] ) 
		{
			if( _this != undefined )
			{
				return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			}
		} 
		else if ( typeof method === 'object' || ! method ) 
		{
			return methods.init.apply( this, arguments );
		}
		else
		{
			$.error( 'Method ' +  method + ' does not exist on jQuery.'+[plugin_name] );
		}
	}
	//-------------------------------------------
	// default options
	$.fn[plugin_name].defaults = {
		offsetBottom: 15,
		contentSelector: '.section-content',
		callback: function(){}
	};
	
})( jQuery, window);