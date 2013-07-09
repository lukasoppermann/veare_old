// document ready
$(function(){
	
	var _items = $('.items'),
			_item = _items.find('.card'),
			tile;
			
	_items.fs_tiles();
	
	$('.filters').fs_filter();
	
	// if( resolution != 'mobile' )
	// {
	// 	if( resolution == 'tablet-small' )
	// 	{
	// 		column = 2;
	// 	}
	// 	if( resolution == 'tablet' )
	// 	{
	// 		column = 3;
	// 	}
	// 	else
	// 	{
	// 		column = 4;
	// 	}
	// 	var itemsWith = _items.width(),
	// 			itemWidth = _item.outerWidth(true);
	// 
	// 	_item.each( function( index, item )
	// 	{           
	// 		var _this = $(this);
	// 		items_pos[index] = {};
	// 		items_pos[index].top = _this.position().top;
	// 		items_pos[index].bottom = items_pos[index].top+_this.outerHeight(false);
	// 		
	// 		if( items_pos[index-column] !== undefined )
	// 		{
	// 			if(items_pos[index-column].bottom + margin*2 == items_pos[index].top)
	// 			{
	// 				items_pos[index].offset = 0;
	// 			}
	// 			else
	// 			{
	// 				items_pos[index].offset = (items_pos[index].top-items_pos[index-column].bottom);
	// 				_this.animate({'top':"-="+(items_pos[index].offset-margin*2)});
	// 				items_pos[index].top -= (items_pos[index].offset-margin*2);
	// 				items_pos[index].bottom = items_pos[index].top+_this.outerHeight(false);
	// 			}
	// 		}
	// 		else
	// 		{
	// 			items_pos[index].offset = 0;
	// 		}
	// 
	// 	});
	// }

	_body.on('resolutionChange', function( resolution ){
		_items.fs_tiles('stop', 'arrange');
	});
	

	// $.fs_resize(function(){
	// 	if( resolution != 'mobile' )
	// 	{
	// 		
	// 		if( resolution == 'tablet-small' )
	// 		{
	// 			column = 2;
	// 		}
	// 		else if( resolution == 'tablet' )
	// 		{
	// 			column = 3;
	// 		}
	// 		else
	// 		{
	// 			column = 4;
	// 		}
	// 		var itemsWith = _items.width(),
	// 				itemWidth = _item.outerWidth(true);
	// 
	// 		_item.each( function( index, item )
	// 		{
	// 			var _this = $(this);
	// 			items_pos[index] = {};
	// 			items_pos[index].top = _this.position().top;
	// 			items_pos[index].bottom = items_pos[index].top+_this.outerHeight(false);
	// 		
	// 			if( items_pos[index-column] !== undefined )
	// 			{
	// 				if(items_pos[index-column].bottom + margin*2 == items_pos[index].top)
	// 				{
	// 					items_pos[index].offset = 0;
	// 				}
	// 				else
	// 				{
	// 					items_pos[index].offset = (items_pos[index].top-items_pos[index-column].bottom);
	// 					_this.animate({'top':"-="+(items_pos[index].offset-margin*2)});
	// 					items_pos[index].top -= (items_pos[index].offset-margin*2);
	// 					items_pos[index].bottom = items_pos[index].top+_this.outerHeight(false);
	// 				}
	// 			}
	// 			else
	// 			{
	// 				items_pos[index].offset = 0;
	// 			}
	// 		});
	// 	}
	// 	offset_disabled = false;
	// },300);
	
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