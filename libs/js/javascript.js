// jquery ready
$(function(){
	// -----------------------
	// define variables
	var win = $(window),
			screen = {},
			_body = $('body'),
			_html = $('html'),
			_logo = $('#logo'),
			_menu_icon = $('#menu_icon'),
			i = 1;
	// -----------------------
	// define functions
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
	// -----------------------
	// add retina detection
	var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : '1';
	_body.addClass('x'+pixelRatio);
	// set images depending on ratio
	$('.img-optimized').each(function(){
		var _this = $(this);
		_this.attr('src',_this.data('src-x'+pixelRatio)).load(function(){
			_this.width(_this.width()/pixelRatio);
		});
	});
	// -----------------------
	// query actions	
	var query_actions = function( resolution )
	{

	};
	// -----------------------
	// media queries	
	var queries = [
		{
			context: 'mobile-portrait',
			match: function() {
				query_actions('mobile-portrait');
				_body.addClass('mobile portrait '+pixelRatio).removeClass('hovers tablet-small tablet-medium landscape tablet screen wide-screen');
			}
		},
		{
			context: 'mobile-landscape',
			match: function() {
				query_actions('mobile-landscape');
				_body.addClass('mobile landscape '+pixelRatio).removeClass('hovers tablet-small tablet-medium portrait tablet screen wide-screen');
			}
		},
		{
			context: 'tablet-small',
			match: function() {
				query_actions('tablet-small');
				_body.addClass('tablet-small '+pixelRatio).removeClass('hovers tablet tablet-medium mobile screen wide-screen');
				if( !_body.hasClass('loaded-tablet') )
				{
					_body.addClass('hovers');
				}
			}
		},
		{
			context: 'tablet-medium',
			match: function() {
				query_actions('tablet-medium');
				_body.addClass('tablet-medium '+pixelRatio).removeClass('hovers tablet-small tablet mobile screen wide-screen');
				if( !_body.hasClass('loaded-tablet') )
				{
					_body.addClass('hovers');
				}
			}
		},
		{
			context: 'tablet',
			match: function() {
				query_actions('tablet');
				_body.addClass('tablet '+pixelRatio).removeClass('hovers tablet-small tablet-medium mobile screen wide-screen');
				if( !_body.hasClass('loaded-tablet') )
				{
					_body.addClass('hovers');
				}
			}
		},
		{
			context: 'min-screen',
			match: function() {
				query_actions('min-screen');
				_body.addClass('hovers min-screen '+pixelRatio).removeClass('tablet-small tablet-medium mobile tablet wide-screen');
			}
		},
		{
			context: 'screen',
			match: function() {
				query_actions('screen');
				_body.addClass('hovers screen '+pixelRatio).removeClass('tablet-small tablet-medium mobile tablet wide-screen min-screen');
			}
		},
		{
			context: 'wide-screen',
			match: function() {
				query_actions('wide-screen '+pixelRatio);
				_body.addClass('hovers screen wide-screen').removeClass('tablet-small tablet-medium mobile tablet min-screen');
			}
 		}
	];
	// Go!
	MQ.init(queries);	
	// run initial resize fn
	$('section').fs_centered({callback:function(){_body.delay(100).addClass('loaded');},'content':'.section-content'});
	// _body.delay(100).addClass('loaded');
	// resize_sections(function(){
	// 	_body.delay(100).addClass('loaded');
	// });
	// _body.delay(100).addClass('loaded');
	// -----------------------
	
	// $.fs_resize(function()
	// {
	// 	// resize sections
	// 	// resize_sections();
	// 	
	// 	$('.adjust').each(function()
	// 	{
	// 		var _this 						= $(this),
	// 				_section_content	= _this.find('.section-content'),
	// 				_children 				= _section_content.children(),
	// 				max_width 				= 0;
	// 		//
	// 		_section_content.width('');
	// 		//
	// 		_children.each(function()
	// 		{
	// 			var _this = $(this);
	// 			if( _this.hasClass('fixed-width') )
	// 			{
	// 				var width = _this.width();
	// 			}
	// 			else
	// 			{
	// 				var width = _this.css({'display':'inline','width':'auto'}).width();
	// 				// _this.css({'display':'block','width':''});
	// 			}
	// 			
	// 			if( width > max_width )
	// 			{
	// 				max_width	= width;
	// 			}
	// 		});
	// 		_section_content.width(max_width);
	// 		//
	// 		_this.height(_section_content.outerHeight());
	// 	});
	// 	
	// }, 100);
	// 
	// 
	// $('.adjust').each(function()
	// {
	// 	var _this 						= $(this),
	// 			_section_content	= _this.find('.section-content'),
	// 			_children 				= _section_content.children(),
	// 			max_width 				= 0;
	// 	//
	// 	_children.each(function()
	// 	{
	// 		var _this = $(this);
	// 		if( _this.hasClass('fixed-width') )
	// 		{
	// 			var width = _this.width();
	// 		}
	// 		else
	// 		{
	// 			var width = _this.css('display','inline').width();
	// 			_this.css('display','block');
	// 		}
	// 
	// 		if( width > max_width )
	// 		{
	// 			max_width	= width;
	// 		}
	// 	});
	// 	_section_content.find('.full').width('100%');
	// 	_section_content.width(max_width);
	// 	//
	// 	_this.height(_section_content.outerHeight());
	// });
	
	
	
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
// -----------------------------
// maps
	var lat = 52.546167,
			lng = 13.4145,
		 	zoom = 14,
			dragevent;
	// draw map  
	var dragfn = function(){
		map.setCenter(lat, lng);
		map.setZoom(zoom);	
	};
	// -----------------------
	// Define styles	
	var style = [
	{
		"stylers": [{
			"visibility": "off"
		}]
	},
  {
		"featureType": "road.local",
		"elementType": "labels",
		"stylers": [
			{ "visibility": "off" }
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#ffffff" }
		]
	},
  {
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [
			{ "visibility": "off" }
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
			{ "visibility": "off" },
			{ "color": "#ffffff" }
		]
	},
	{
		"featureType": "road.arterial",
		"stylers": [
			{"visibility": "on"},
			{"color": "#f5e655"}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
			{ "visibility": "on"},
			{ "color":"#7e7733"}
		]
	},
  {
		"featureType": "road.arterial",
		"elementType": "labels.icon",
		"stylers": [
			{ "visibility": "off" }
		]
	},
	{
		"featureType": "road.highway",
		"stylers": [
			{"visibility": "on"}, 
			{"color": "#f5e655"}
			]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{"visibility": "on"}, 
			{"color": "#7e7733"}
		]
	},
  {
		"featureType": "road.highway",
		"elementType": "labels.icon",
		"stylers": [
			{ "visibility": "off" }
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#469bb4" }
		]
	},
	{
 		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#ebf0f0" }
		]
 	},
	{
 		"featureType": "landscape.man_made",
		"elementType": "geometry",
		"stylers": [
			{ "visibility": "off" }
		]
 	},
	{
 		"featureType": "landscape",
		"elementType": "labels",
		"stylers": [
			{ "visibility": "off" }
		]
 	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{"visibility": "on"}, 
			{"color": "#74c2a6"}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels",
		"stylers": [
			{"visibility": "off"}
		]
	}
	];
	if( $('#veare_map').length > 0 )
	{
		// -----------------------
		// Create GMaps object
		map = new GMaps({
			div: '#veare_map',
			lat: lat, // lat: 52.546167, - neu:  52.5354,13.43315
			lng: lng, // lng: 13.415201,
			zoom: 12,
			disableDefaultUI: true,
			draggable: false,
			scrollwheel: false,
			tilesloaded: function(){
				map.setZoom(14);
				var _marker = $('.marker-wrapper');
				if(_marker.css('opacity') == 0)
				{
					_marker.find('.veare-contact').show();
					_marker.css({'marginTop':'-400px'}).delay(300).animate({'opacity':'1.0','marginTop':'-160px'}, 300, 'swing').animate({'marginTop':'-183px'}, 300);
				}
			}
		});
		// Add styling
		map.setOptions({
			styles: style
		});
	}
// close jquery ready
});