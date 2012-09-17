$(function()
{
	// -----------------------
	// when everything is fully loaded
	$(window).load( function()
	{
		if( !$('body').hasClass('mobile') )
		{
			var lat = 52.546167;
			var lng = 13.4145;
			var zoom = 15;
				
			$('#stage, #stage .current-page').css({'height':$(window).height(),'paddingBottom':0});
			var content = '<div class="marker-wrapper">'+$('.veare-contact').attr('class', 'veare-contact').clone().wrap('<div class="wrap" />').parents('.wrap').html()+'<div class="shadow"></div></div>';
			// draw map
			var map, dragevent;
			var dragfn = function(){
				map.setCenter(lat, lng);
				map.setZoom(zoom);	
			};
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
			map.drawOverlay({
				lat: map.getCenter().lat()-.0054,
				lng: map.getCenter().lng(),
				layer: 'overlayLayer',
				content: content
			});
			// debounced resize event (fires once every 100ms)
			$(window).fs_resize(function(){
				if(!$('body').hasClass('mobile'))
				{
					$('#stage').height($(window).height());
					map.refresh();
					map.setCenter(map.getCenter().lat(), map.getCenter().lng());
				}
			});
			// remove style on resolution change
			$('body').on('resolutionChange', function(e, resolution){
				if(resolution == 'mobile-portrait' || resolution == 'mobile-landscape' || resolution == 'mobile')
				{
					$('#stage').attr('style','');
				}
			});
		}
		else
		{
			$('body').on('resolutionChange', function(e, resolution){
				if(resolution != 'mobile-portrait' && resolution != 'mobile-landscape' && resolution != 'mobile')
				{
					window.location.reload();
				}
			});
		}
	});
//
});