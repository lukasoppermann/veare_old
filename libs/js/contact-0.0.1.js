$(function()
{
	// declare object
	pages.contact = {};
	// -----------------------
	// init fn
	pages.contact.init = function()
	{
		$.fs_load(function()
		{
			if( !gCache.body.hasClass('mobile') )
			{
				// set variables
				var lat = 52.546167,
						lng = 13.4145,
					 	zoom = 15,
						map, 
						dragevent;
				
				gCache.stage.css({'height':gCache.window.height(),'paddingBottom':0});
				gCache.stage.find('.current-page').css({'height':gCache.window.height(),'paddingBottom':0});
				var content = '<div class="marker-wrapper">'+$('.veare-contact').attr('class', 'veare-contact').clone().wrap('<div class="wrap" />').parents('.wrap').html()+'<div class="shadow"></div></div>';
				// draw map
				var dragfn = function(){
					map.setCenter(lat, lng);
					map.setZoom(zoom);	
				};
				// -----------------------
				// Create GMaps object
				map = new GMaps({
					div: '#veare_map',
					lat: lat, // lat: 52.546167, - neu:  52.5354,13.43315
					lng: lng, // lng: 13.415201,
					disableDefaultUI: true,
					dragstart: function(){
						clearTimeout( dragevent );	
					},
					dragend: function()
					{
						dragevent = setTimeout( dragfn, 3000);
					},
					zoom_changed: function(){
						clearTimeout( dragevent );
						dragevent = setTimeout( dragfn, 3000);
					},
					tilesloaded: function(){
						var _marker = $('.marker-wrapper');
						if(_marker.css('opacity') == 0)
						{
							_marker.find('.veare-contact').show();
							_marker.css({'marginTop':'-400px'}).delay(300).animate({'opacity':'1.0','marginTop':'-160px'}, 300, 'swing').animate({'marginTop':'-183px'}, 300);
						}
					}
				});
				// -----------------------
				// Draw Overlay
				map.drawOverlay({
					lat: map.getCenter().lat()-.0054,
					lng: map.getCenter().lng(),
					layer: 'overlayLayer',
					content: content
				});
				// debounced resize event (fires once every 100ms)
				gCache.window.fs_resize(function(){
					if(!gCache.body.hasClass('mobile'))
					{
						gCache.stage.height(gCache.window.height());
						map.refresh();
						map.setCenter(map.getCenter().lat(), map.getCenter().lng());
					}
				});
				// remove style on resolution change
				gCache.body.on('resolutionChange', function(e, resolution){
					if(resolution == 'mobile-portrait' || resolution == 'mobile-landscape' || resolution == 'mobile')
					{
						gCache.stage.attr('style','');
					}
				});
			}
			else
			{
				gCache.body.on('resolutionChange', function(e, resolution){
					if(resolution != 'mobile-portrait' && resolution != 'mobile-landscape' && resolution != 'mobile')
					{
						window.location.reload();
					}
				});
			}
		});
	};
	// destruct fn
	pages.contact.destroy = function()
	{
		
	};
	// run init on page load
	pages.contact.init();
//
});