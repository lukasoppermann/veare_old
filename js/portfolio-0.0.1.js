// document ready
$(function(){
	
	var _items = $('.items'),
			_item = _items.find('.card'),
			tile;
			
	_items.fs_tiles();
	
	$('.filters').fs_filter({
		url: $('body').data('url')+'portfolio/',
		title: "vea.re – visionary design | portfolio: "
	});
	
	_body.on('resolutionChange', function( resolution ){
		_items.fs_tiles('stop', 'arrange');
	});

// close jquery
});