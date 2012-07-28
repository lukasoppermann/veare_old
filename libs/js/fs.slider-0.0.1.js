$(function(){
	$('.tabs').on('click', 'li', function(){
		var _this = $(this);
		var active = $('.slider-content').find('.active');
		
		$('.tabs').find('li.active').removeClass('active').addClass('passive');
		_this.addClass('active').removeClass('passive');
		
		if( !active.hasClass( _this.data('slide') ) )
		{
			active.removeClass('active');
			$('.slider-content').find('.'+_this.data('slide')).addClass('active');
		}
	});
});