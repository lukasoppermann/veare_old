// document ready
$(function(){
	
	var _items = $('.items'),
			_item = _items.find('.card'),
			itemMarg = parseInt(_item.css('marginLeft'))+parseInt(_item.css('marginRight')),
			itemWidth = _item.outerWidth()+(itemMarg*2),
			width,ratio;

	_items.freetile({
		animate: true,
		elementDelay: 30,
		containerAnimate: true,
		persistentCallback: true,
		callback: function(){
			itemsWith = _items.width();
			// calc ratio
			ratio = Math.floor(itemsWith/itemWidth);
			// calc width
			width = itemWidth;
			// set with
			_items.css({'width':ratio*itemWidth});
		}
	});

	_items.on({	
		mouseenter: function(){
			$(this).addClass("hovered");
			_items.addClass('fade');
		},
		mouseleave: function(){
			$(this).removeClass("hovered");
			_items.removeClass('fade');
		}
	}, '.card');

// close jquery
});