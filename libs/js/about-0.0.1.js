// on reslution change
$('body').on('resolutionChange', function(e, resolution){
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
// on resize
$('body').fs_resize(function(){
	if( $('#stage').innerWidth() < $('.main-headline').width() )
	{
		alert($('#stage').innerWidth());
	}
	if($('.quote-box').width() < 240)
	{
		$('.quote-box').css({'fontSize':'110%'});
	}
	else
	{
		$('.quote-box').css({'fontSize':'140%'});		
	}
});
// on load
$(window).load( function() {
	if( $('#stage').width()-110 < $('.main-headline').width() )
	{

	}
	if($('.quote-box').width() < 240)
	{
		$('.quote-box').css({'fontSize':'110%'});
	}
	else
	{
		$('.quote-box').css({'fontSize':'140%'});		
	}
});