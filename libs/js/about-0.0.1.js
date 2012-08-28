$(function()
{
// on reslution change
var _body = $('body');
_body.on('resolutionChange', function(e, resolution){
	// define variables
	var _rearrange = $('.rearrange');
	// rearrange elements
	if(resolution == 'tablet-small' || resolution == 'mobile-portrait' || resolution == 'mobile-landscape' || resolution == 'mobile')
	{
		// move quote after content
		_rearrange.each(function(){
			var _this = $(this);
			// if( _this.data( resolution ) )

			_this.find('.content').insertBefore(_this.find('.quote'));
		});
	}
	else
	{
		// move back quote before content
		_rearrange.each(function(){
			var _this = $(this);
			_this.find('.quote').insertBefore(_this.find('.content'));
		});
	}
});
//------------------------------------
var _window = $(window);
var window_height;
var activatables = new Array();
var activate_areas = new Array();
// on resize
_body.fs_resize(function(){
	window_height = _window.height();
	$('.activatable').each(function(index){
		activatables[ index ] = new Array();
		activatables[ index ].selector = $(this);
		activatables[ index ].top = Math.round(activatables[index].selector.offset().top);		
		activatables[ index ].bottom = activatables[ index ].top + activatables[ index ].selector.height();				
		activate_areas[ index ] = Math.round(activatables[ index ].top);			
	});
	if( ($('#stage').width()-$('#sidebar').width()) < $('.main-headline').width() )
	{
		$('.main-headline').addClass('small-font');
	}
	else
	{
		$('.main-headline').removeClass('small-font');		
	}
	if($('.quote-box').width() < 240)
	{
		$('.quote-box').css({'fontSize':'110%'});
	}
	else
	{
		$('.quote-box').css({'fontSize':''});		
	}
});
//------------------------------------
// on load
_window.load( function() {	
	_window.trigger('resize');
	window_height = _window.height();
	$('.activatable').each(function(index){
		activatables[ index ] = new Array();
		activatables[ index ].selector = $(this);
		activatables[ index ].top = Math.round(activatables[index].selector.offset().top);		
		activatables[ index ].bottom = activatables[ index ].top + activatables[ index ].selector.height();				
		activate_areas[ index ] = Math.round(activatables[ index ].top);			
	});
	//
	if( ($('#stage').width()-$('#sidebar').width()) < $('.main-headline').width() )
	{
		$('.main-headline').addClass('small-font');
	}
	else
	{
		$('.main-headline').removeClass('small-font');		
	}
	if($('.quote-box').width() < 240)
	{
		$('.quote-box').css({'fontSize':'110%'});
	}
	else
	{
		$('.quote-box').css({'fontSize':''});		
	}
	// create active bgs
	$('.active-bg.right').each(function(){
		var _this = $(this);
		_this.css({'width':$('.active-bg').parents('.column').width()+60+($('#stage').width()-$('.active-bg').position().left), 'height':$('.active-bg').parents('.column').height()+60});
	});
	
	
});
//------------------------------------
var scrollTop = _window.scrollTop();
var scrollBottom = scrollTop + _window.height();
_window.on('scroll', function(){
	scrollTop = _window.scrollTop();
	scrollBottom = scrollTop + _window.height();
	// check for active area
	$.each(activate_areas, function(index, top)
	{
		//
		// if( scrollTop > top - (window_height/2) && scrollTop+25 < top)
		if( (activatables[index].bottom >= scrollTop) && (activatables[index].top <= scrollBottom)
		&& (activatables[index].bottom <= scrollBottom) &&  (activatables[index].top >= scrollTop) )
		{
			// $('.activatable.active').removeClass('active');
			activatables[index].selector.addClass('active');
		}
		else
		{
			activatables[index].selector.removeClass('active');			
		}
	});
	// function isScrolledIntoView(elem)
	// {
	//     var docViewTop = $(window).scrollTop();
	//     var docViewBottom = docViewTop + $(window).height();
	// 
	//     var elemTop = $(elem).offset().top;
	//     var elemBottom = elemTop + $(elem).height();
	// 
	//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
	//       && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
	// }
	
	// if(!_section_two.hasClass('active') && _window.scrollTop() >= '500' && _window.scrollTop() <= '750')
	// {
	// 	_section_two.addClass('active');
	// }
	// else if(_section_two.hasClass('active') && (_window.scrollTop() < '500' || _window.scrollTop() > '750'))
	// {
	// 	_section_two.removeClass('active');		
	// }
	// 
	// if(!_section_three.hasClass('active') && _window.scrollTop() >= '750' && _window.scrollTop() <= '1150')
	// {
	// 	_section_three.addClass('active');
	// }
	// else if(_section_three.hasClass('active') && (_window.scrollTop() < '750' || _window.scrollTop() > '1150'))
	// {
	// 	_section_three.removeClass('active');		
	// }
	// 
	// if(!_section_four.hasClass('active') && _window.scrollTop() >= '1150')
	// {
	// 	_section_four.addClass('active');
	// }
	// else if(_section_four.hasClass('active') && (_window.scrollTop() < '1150'))
	// {
	// 	_section_four.removeClass('active');		
	// }
});
//
});