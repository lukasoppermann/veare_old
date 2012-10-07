// once jquery is loaded
$(function()
{
// define variables
var window_height;
var activatables = new Array();
var activate_areas = new Array();
var scrollTop = gCache.window.scrollTop();
var scrollBottom = scrollTop + gCache.window.height();
//------------------------------------
// define functions
// check active for other devices
check_active_fn = function()
{
	scrollTop = gCache.window.scrollTop();
	scrollBottom = scrollTop + gCache.window.height();
	// check for active area
	$.each(activate_areas, function(index, top)
	{
		//
		if( (activatables[index].bottom >= scrollTop+(gCache.window.height()*0.08)) && (activatables[index].top <= scrollBottom-(gCache.window.height()*0.08))
		&& (activatables[index].bottom <= scrollBottom-(gCache.window.height()*0.08)) &&  (activatables[index].top >= scrollTop+(gCache.window.height()*0.08)) )
		{
			activatables[index].selector.addClass('active');
		}
		else
		{
			activatables[index].selector.removeClass('active');
		}
	});
};
// prepare active areas
var prepare_active_fn = function()
{
	// adjust size of active area & bgs
	window_height = gCache.window.height();
	$('.activatable').each(function(index){
		activatables[ index ] = new Array();
		activatables[ index ].selector = $(this);
		activatables[ index ].top = Math.round(activatables[index].selector.offset().top);
		activatables[ index ].bottom = activatables[ index ].top + activatables[ index ].selector.find('.content').height();
		activate_areas[ index ] = Math.round(activatables[ index ].top);
	});
	// check for tablet screen
	if(gCache.body.hasClass('tablet-small'))
	{
		$('.active-bg').each(function(){
			var _this = $(this);
			_this.css({'width':_this.parents('.column').width()+25, 'height':_this.parents('.column').find('.text').height()+60});
		});
	}
	else
	{
		// create active bgs
		$('.active-bg.right').each(function(){
			var _this = $(this);
			_this.css({'width':_this.parents('.column').width()+60+($('#stage').width()-_this.position().left), 'height':_this.parents('.column').find('.text').height()+60});
		});
		$('.active-bg.left').each(function(){
			var _this = $(this);
			_this.css({'width':_this.parents('.column').width()+60, 'height':_this.parents('.column').find('.text').height()+60});
		});
	}
};
// define check_active
empty_fn = function(){};
// adjust font
var adjust_font = function()
{
	// cache selection
	var _main_headline = $('.main-headline');
	var _quote_box = $('.quote-box');
	// adjust font size
	if( ($('#stage').width()-$('#sidebar').width()) < _main_headline.width() )
	{
		_main_headline.addClass('small-font');
	}
	else
	{
		_main_headline.removeClass('small-font');
	}
	if(_quote_box.width() < 240)
	{
		_quote_box.css({'fontSize':'110%'});
	}
	else
	{
		_quote_box.css({'fontSize':''});
	}
}
//
//------------------------------------
// on resolution change
gCache.body.on('resolutionChange', function(e, resolution){
	// define variables
	var _rearrange = $('.rearrange');
	// rearrange elements
	if(resolution == 'tablet-small' || resolution == 'mobile-portrait' || resolution == 'mobile-landscape' || resolution == 'mobile')
	{
		if( resolution != 'tablet-small' )
		{
			check_active = "empty_fn";
		}
		else
		{
			check_active = "check_active_fn";
		}
		// move quote after content
		_rearrange.each(function(){
			var _this = $(this);
			_this.find('.content').insertBefore(_this.find('.quote'));
		});
	}
	else
	{
		check_active = "check_active_fn";
		// move back quote before content
		_rearrange.each(function(){
			var _this = $(this);
			_this.find('.quote').insertBefore(_this.find('.content'));
		});
	}
});
//------------------------------------
$('.article').animate({'opacity':1,'marginTop':0}, 500, 'swing');
//------------------------------------
// on resize
gCache.body.fs_resize(function()
{
	if(!gCache.body.hasClass('mobile'))
	{
		prepare_active_fn();
	}
	// adjust font size
	adjust_font();
});
//------------------------------------
// on load
$.fs_load( function()
{	
	// gCache.window.trigger('resize');
	//
	// adjust font size
	adjust_font();
	//---------------------------
	// reorganize quotes
	var _rearrange = $('.rearrange');
	//	
	if(gCache.body.hasClass('tablet-small') || gCache.body.hasClass('mobile-portrait') || gCache.body.hasClass('mobile-landscape') || gCache.body.hasClass('mobile'))
	{
		// move quote after content
		_rearrange.each(function(){
			var _this = $(this);
			_this.find('.content').insertBefore(_this.find('.quote'));
		});
		//
		if( !gCache.body.hasClass('tablet-small') )
		{
			check_active = "empty_fn";
		}
		else
		{
			check_active = "check_active_fn";
		}
	}
	else
	{
		check_active = "check_active_fn";
		// move back quote before content
		_rearrange.each(function(){
			var _this = $(this);
			_this.find('.quote').insertBefore(_this.find('.content'));
		});
	}
	prepare_active_fn();
	//------------------------------------
	gCache.window.on('scroll', function()
	{
		window[check_active]();
	});
});
//
});