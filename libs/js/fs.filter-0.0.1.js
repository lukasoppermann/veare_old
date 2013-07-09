// ----------------------------------------------------
// jQuery fs_tiles fn
// ----------------------------------------------------
// define functions 
;(function( $, window )
{
	// define vars
	var plugin_name = 'fs_filter',
			_this;
	
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
			// get items
			methods.settings.items = $(methods.settings.item);
			// add fn
			_this.on('click', '.filter', function(e){
			
				e.stopPropagation();
				var filter = $(this);
				
				if( filter.hasClass('active') )
				{
					filter.removeClass('active');
					methods.filter(false);
				}
				else
				{
					_this.find('.filter').removeClass('active');
					methods.filter(filter.data('category'));
					filter.addClass('active');
				}
				
				return false;
				
			});
			
		},
		// filter
		filter: function( filter )
		{
			methods.settings.items.removeClass('faded');

			methods.settings.items.each(function()
			{
				var _item = $(this);
				
				if( filter != undefined && filter != false && _item.data('category').indexOf(filter) == -1 )
				{
					_item.addClass('faded');
				}
				
			});
		}
	};
	
	//-------------------------------------------
	// fn wrapper
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
		item: '.items .card',
		callback: function(){}
	};

})( jQuery, window);
