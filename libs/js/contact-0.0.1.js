$(function()
{
	// -----------------------
	// when everything is fully loaded
	$(window).load( function() {
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
	});
	// ---------------------------------------------------
	// email	
	$('#email_form').on('keydown', function()
	{
		//
		if( $("#email").val() != '' && $("#message").val() != '' )
		{
			$('#email_form').find('#submit').removeClass('disabled');
		}
		else
		{
			$('#email_form').find('#submit').addClass('disabled');			
		}
	});
	$('#email_form').on('keyup', function()
	{
		//
		if( $("#email").val() != '' && $("#message").val() != '' )
		{
			$('#email_form').find('#submit').removeClass('disabled');
		}
		else
		{
			$('#email_form').find('#submit').addClass('disabled');			
		}
	});
	//
	$('#email_form').on('click', '#submit:not(.disabled)', function()
	{
		$('#email_form').find('#submit').addClass('disabled');
		var _email 	= $("#email");
		var _msg 	= $("#message");
		$.ajax({
		    type : 'post',
		    dataType : 'json',
		    data : {email: _email.val(), message: _msg.val()},
		    url : CI_BASE+'contact/send_email',
		    success : function( r ){
		        if( r != null && r.sent )
		        {   
					_email.val('');			
					_msg.val('');
					_email.parents('#email_form').prepend('<div class="message success" style="opacity:0"><p>Your Message has been sent successfully.</p></div>'); 
					
					$('.message').css({'left':'50%','marginLeft':-($('.message').outerWidth()/2),'marginTop':100}).animate({'opacity':1},300).delay(1000).fadeOut(300, 	
						function(){
							$(this).remove();
					});
		        }
		        else
		        {
		            $('.message').remove();
		            _email.parents('#email_form').prepend('<p class="message error" style="opacity:0">There was a problem and the message was probably not sent.</p>');
		      $('.message').css({'left':'50%','marginLeft':-($('.message').outerWidth()/2)}).animate({'top':'40%', 	'opacity':'1'},500).delay(3000).fadeOut(function(){
					$(this).remove();
				});
		        }
		    }
		});

	});
	
});