$(function()
{
	// -----------------------
	// when everything is fully loaded
	$(window).load( function() {
		if( !$('body').hasClass('mobile'))
		{
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
				content: '<div class="marker-wrapper"><div class="veare-contact"><div class="contact-wrapper"><h2 class="company">veare / intelligent design</h2>'+
						'<div class="contact-details">'+
						'<div class="contact-detail"><span class="type">P</span><span class="content"><a target="_blank" href="tel:004915771496644">015771496644</a></span></div>'+
						'<div class="contact-detail"><span class="type">M</span><span class="content"><a target="_blank" href="mailto:mail@vea.re">mail@vea.re</a></span></div>'+
						'<div class="contact-detail"><span class="type">T</span><span class="content"><a target="_blank" href="https://twitter.com/lukasoppermann">@vearenet</a></span></div>'+
						'</div></div>'+
						'<div class="veare-about"><h3 class="heading">the studio</h3><p class="content">'+
						'veare is a Berlin-based studio with a focus on interface design & modern branding solutions.</p></div></div><div class="shadow"></div></div>'
			});
			// debounced resize event (fires once every 100ms)
			$(window).fs_resize(function(){
				map.refresh();
				map.setCenter(map.getCenter().lat(), map.getCenter().lng());
			});
		}
		else
		{
			$('.veare-contact').css({'height':$(document).height()-105,'opacity':0,'display':'block'})
			$('.contact-details').css('bottom',$('.veare-about').outerHeight()+10);
			$('.veare-contact').animate({'opacity':1}, 1000);
			if($('body').hasClass('landscape'))
			{
				$('.veare-contact').css({'height':$(document).height()-50, 'width':$(document).width()-80,'opacity':0,'display':'block'}).animate({'opacity':1}, 1000);
			}
			//
			$('body').on('resolutionChange', function(e, resolution){
				if(resolution == 'mobile-portrait')
				{
					$('.veare-contact').css({'height':$(document).height()-105,'width':'100%','opacity':0,'display':'block'})
					$('.contact-details').css('bottom',$('.veare-about').outerHeight()+10);
				}
				else
				{
					$('.veare-contact').css({'height':$(document).height()-50, 'width':$(document).width()-80,'opacity':0,'display':'block'});
				}
			});
		}
	});
//
});