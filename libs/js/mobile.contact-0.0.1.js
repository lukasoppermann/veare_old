$('body').on('resolutionChange', function(e, resolution)
{
	// get vars
	var _document = $(document);
	var _outer = $('.veare-contact');
	var _about = $('.veare-about');
	var new_height = $(document).height();
	//
	if(resolution == 'mobile-portrait')
	{	
		if( _about.outerHeight() + 260 > _document.height() )
		{
			new_height = _about.outerHeight() + 260;
			// set elements
			$(document).height(new_height);
			_outer.height(new_height - 110);
		}
		else
		{
			new_height = new_height - 110;
			_outer.height(new_height);
		}
		alert(new_height - $('.company').outerHeight() - _about.outerHeight() - 20 - $('.contact-details').outerHeight());
		$('.contact-details').css({'marginTop': new_height - $('.company').outerHeight() - _about.outerHeight() - 40 - $('.contact-details').outerHeight()});
		// .css({'height':$('window'),'width':'100%'})
	}
	else
	{
		alert('land');	
	}
});

