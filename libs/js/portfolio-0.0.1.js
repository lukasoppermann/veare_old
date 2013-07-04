// document ready
$(function(){
	
	var _items = $('.items'),
			_item = _items.find('.card'),
			column = 4,
			items_pos = {},
			margin = parseInt(_item.first().css('marginTop'));
			
	if( resolution != 'mobile' )
	{

		_item.each( function( index, item )
		{           
			var _this = $(this),
			offset;
			items_pos[index] = {};
			items_pos[index].top = _this.position().top;
			items_pos[index].bottom = items_pos[index].top+_this.height();
			
			if( items_pos[index-column] !== undefined )
			{

				if(items_pos[index-column].bottom + margin*2 == items_pos[index].top)
				{
					items_pos[index].offset = 0;
				}
				else
				{
					items_pos[index].offset = items_pos[index].top-(items_pos[index-column].bottom+margin*2);
					_this.addClass('index-'+index).animate({'marginTop':"-="+items_pos[index].offset});
					
					items_pos[index].bottom = items_pos[index].bottom-items_pos[index].offset;
				}
			}
		});
	}
	// _items.freetile({
	// 	animate: true,
	// 	elementDelay: 30,
	// 	containerAnimate: true,
	// 	persistentCallback: true,
	// 	callback: function(){
	// 		itemsWith = _items.width();
	// 		// calc ratio
	// 		ratio = Math.floor(itemsWith/itemWidth);
	// 		// calc width
	// 		width = itemWidth;
	// 		// set with
	// 		_items.css({'width':ratio*itemWidth});
	// 	}
	// });

// close jquery
});