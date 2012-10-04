// fn to check for history api
function supports_history_api() { return !!(window.history && history.pushState); }

$(function(){
	
	var content = {};
	
	if( supports_history_api() )
	{
		$('body').on('click', '.ajax-link', function()
		{
			// get current path
			var path = $(this).attr('href');
			// get current page
			var _current = $('.current-page');
			// set url
			history.pushState(null, null, path);
			// check if content exists
			if( content[path] )
			{
				if( ! content[path].hasClass('current-page') )
				{
					_current.removeClass('current-page').animate({'marginTop':'20%','opacity':0}, 300, function(){
						$(this).hide()
						content[path].css('display','block').animate({'opacity':'1','marginTop':0}, 300).addClass('current-page');
					});
				}
			}
			else
			{			
				_current.animate({'marginTop':'20%','opacity':0}, 300, function(){$(this).hide()}).removeClass('current-page');
				$.ajax({
					type : 'post',
					data: {'ajax':true},
					dataType: 'json',
					url: path,
				}).done(function(response)
					{
						_current.after($('<div class="current-page page">'+response.content+'</div>').css({'opacity':'0','marginTop':'20%'}));
						//
						content[path] = $('.current-page');
						content[path].css('display','block').animate({'opacity':'1','marginTop':0}, 300);
					}
				).fail(function(){ 
					alert("Something went wrong."); 
				});
			}
			// stop propagation if link
			return false;
		});
	}
	
});