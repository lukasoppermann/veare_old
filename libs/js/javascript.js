var win, resolution, _body, _html;
// jquery ready
$(function(){
	// -----------------------
	// define variables
		win = $(window);
		_body = $('body');
		_html = $('html');
		resolution = 'mobile';
		var	_logo = $('#logo'),
			_menu_icon = $('#menu_icon'),
			i = 1,
			screen = {};
	// -----------------------
	// define functions
	// img padding
	$.fn.imageLoad = function(fn){
		this.load(fn);
		this.each( function() 
		{
			if ( this.complete && this.naturalWidth !== 0 ) {
				$(this).trigger('load');
			}
		});
		return this;
	}
	// min padding
	var minPadding = function(){
		$('.min-padding').each(function(){
			var _this 			= $(this),
					padding 		= _this.data('minpadding'),
					heightdiff	= _this.outerHeight() - _this.children().first().outerHeight();
			// check for mobile
			if( resolution == 'mobile' && _this.data('minpadding-mobile') != undefined )
			{
				padding = _this.data('minpadding-mobile');
			}
			// calc
			if( heightdiff < padding*2 )
			{
				_this.css({'paddingTop':padding-(heightdiff/2), 'paddingBottom':padding-(heightdiff/2)});
			}
		});
	};
	// resize sections
	var resize_sections = function( callback ){
		// get screen dimensions
		screen.height = win.height();
		screen.width 	= win.width();
		// resize body to screen dimensions
		_body.width(screen.width).height(screen.height);
		// check and resize sections
		var _sections = $('section');
		var i = _sections.length;
		// check if i > 0
		if( i > 0 )
		{
			// loop through sections
			_sections.each(function(){
				// cache variables
				var _this 					= $(this),
						screen_height 	= screen.height-15,
						section_content = _this.find('.section-content');
				// check if section content is fixed
				if( !section_content.hasClass('fixed') )
				{
					var section_content_height = section_content.css('height','auto').outerHeight();
				}
				else
				{
					var section_content_height = section_content.outerHeight();
				}
				// remove height auto -> back to 100%
				section_content.css('height','');
				// decrease i
				--i;
				// resize sections
				if( screen_height >= _this.height() )
				{
					if( section_content_height == null || section_content_height <= screen_height )
					{
						_this.height( screen_height );
					}
					else
					{
						_this.height( section_content_height );
					}
				}
				else
				{
					if( section_content_height == null || section_content_height <= screen_height )
					{
						_this.height( screen_height );
					}
					else
					{
						_this.height( section_content_height );
					}
				
				}
				// check if loop is done
				if( i == 0 || typeof(i) == undefined )
				{
					if( typeof(callback) != "undefined" )
					{
						// run callback
						callback();
					}
				}
				// close loop
			});
		}
		// run callback if no section
		else if( typeof(callback) != "undefined" )
		{
			// run callback
			callback();
		}

	};
	//
	win.load(function(){
		_body.removeClass('loading');
	});

	// -----------------------
	// add retina detection
	var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : '1';
	_body.addClass('x'+pixelRatio);
	// set images depending on ratio
	$('.img-optimized').each(function(){
		var _this = $(this);
		var src = _this.data('src-x'+pixelRatio);
		var altSrc = _this.data('src');
		
		_this.addClass('loading').imageLoad(function()
		{
			if( src != undefined )
			{
				_this.css({'width':'auto','height':'auto'});
				var width = this.naturalWidth/pixelRatio;
				var height = this.naturalHeight/pixelRatio;
				_this.css({'width':width,'height':height});
			}
		});
		
		
		if( src != undefined )
		{
			_this.attr('src',src).addClass('loaded').removeClass('loading');
		}
		else if( altSrc != undefined )
		{
			_this.attr('src',altSrc).addClass('loaded').removeClass('loading');
		}
		
	});
	// -----------------------
	// query actions	
	var query_actions = function( res )
	{
		resolution = res;
		
		_body.trigger('resolutionChange', res);
	};
	// -----------------------
	// media queries	
	var queries = [
		{
			context: 'mobile-portrait',
			match: function() {
				_body.addClass('mobile portrait').removeClass('hovers tablet-small tablet-medium landscape tablet screen wide-screen');
				query_actions('mobile');
			}
		},
		{
			context: 'mobile-landscape',
			match: function() {
				_body.addClass('mobile landscape').removeClass('hovers tablet-small tablet-medium portrait tablet screen wide-screen');
				query_actions('mobile');
			}
		},
		{
			context: 'tablet-small',
			match: function() {
				_body.addClass('tablet-small').removeClass('hovers tablet tablet-medium mobile screen wide-screen');
				if( !_body.hasClass('loaded-tablet') )
				{
					_body.addClass('hovers');
				}
				query_actions('tablet-small');
			}
		},
		{
			context: 'tablet',
			match: function() {
				_body.addClass('tablet').removeClass('hovers tablet-small mobile screen wide-screen');
				if( !_body.hasClass('loaded-tablet') )
				{
					_body.addClass('hovers');
				}
				query_actions('tablet');
			}
		},
		{
			context: 'screen',
			match: function() {
				_body.addClass('hovers screen').removeClass('tablet-small tablet-medium mobile tablet wide-screen min-screen');
				query_actions('screen');
			}
		},
		{
			context: 'wide-screen',
			match: function() {
				_body.addClass('hovers screen wide-screen').removeClass('tablet-small tablet-medium mobile tablet min-screen');
				query_actions('wide-screen');
			}
 		}
	];
	// Go!
	MQ.init(queries);	
	// run initial resize fn
	$('section').fs_centered({'content':'.section-content'});
	
	minPadding();
	
	_body.delay(100).addClass('loaded');

	
	$(document).on('click', '#menu_icon', function(e)
	{
		e.stopPropagation();
		if( _body.hasClass('menu-active') )
		{
			_body.removeClass('menu-active');
			_html.removeClass('menu-active');
			$(document).off('.noElastic');
		}
		else
		{
			_body.addClass('menu-active');
			if( _body.hasClass('mobile') )
			{
				_html.addClass('menu-active');
				$(document).on('touchmove.noElastic', function(e){
					e.preventDefault();
				});
			}

		}	
	});
// close jquery ready
});