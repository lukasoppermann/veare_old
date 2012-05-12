$(function()
{
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
					_email.parents('#email_form').prepend('<div class="message success" style="opacity:0"><p>Your Message has been sent successfully.</p></div><img id="airplane" src="../../media/layout/airplane.png" />'); 
					
					$('.message').css({'left':'50%','marginLeft':-($('.message').outerWidth()/2),'marginTop':100}).animate({'opacity':1},300);
					$('#airplane').css({'opacity':0,'left':'50%','marginLeft':-($('.message').outerWidth()/2)}).animate({'opacity':1},300).delay(300).animate({'top':-($(window).height()/2),'left':$(window).width()+200,
					'width':'0%', 'height':'0%'}, 1000, function(){
						$('this').fadeOut(300).remove();
		            	$('.message').fadeOut(300).remove();						
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