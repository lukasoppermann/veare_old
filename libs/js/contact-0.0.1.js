$(function()
{
	// -----------------------
	// when everything is fully loaded
	$(window).load( function() {
		if( !$('body').hasClass('mobile'))
		{
			$('#stage').height($(window).height());
			var content = '<div class="marker-wrapper">'+$('.veare-contact').show().attr('class', 'veare-contact').wrap('<div class="wrap" />').parents('.wrap').html()+'<div class="shadow"></div></div>';
			// draw map
			var map, dragevent;
			var dragfn = function(){
				map.setCenter(52.546167, 13.415201);
				map.setZoom(15);	
			};
			map = new GMaps({
				div: '#veare_map',
				lat: 52.546167,
				lng: 13.415201,
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
				}
			});
			map.drawOverlay({
				lat: 52.541167,
				lng: 13.415201,
				layer: 'overlayLayer',
				content: content
			});
			// debounced resize event (fires once every 100ms)
			$(window).fs_resize(function(){
				map.refresh();
				map.setCenter(map.getCenter().lat(), map.getCenter().lng());
			});
		}
		else
		{
			// $('.veare-contact').css({'height':$(document).height()-105,'opacity':0,'display':'block'})
			// $('.veare-contact').animate({'opacity':1}, 1000);
			// if($('body').hasClass('landscape'))
			// {
			// 	$('.veare-contact').css({'height':$(document).height()-50, 'width':$(document).width()-80,'opacity':0,'display':'block'}).animate({'opacity':1}, 1000);
			// }
			//
			$('body').on('resolutionChange', function(e, resolution){
				if(resolution == 'mobile-portrait')
				{
					// $('.veare-contact').css({'height':$(document).height()-105,'width':'100%','opacity':0,'display':'block'})
				}
				else
				{
					// $('.veare-contact').css({'height':$(document).height()-50, 'width':$(document).width()-80,'opacity':0,'display':'block'});
				}
			});
		}
	});
//
});