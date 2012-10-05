// fn to check for history api
function supports_history_api(){ return !!(window.history && history.pushState); }
// default animation
// var animation
// once jquery is loaded
$(function(){
	// cache selsections
	var content = {}, 
			_head 	= $('head'),
			_body 	= $('body');
	// check for history api support
	if( supports_history_api() )
	{
		_body.on('click', '.ajax-link', function()
		{
			var loading = true;
			// get current path
			var _this = $(this),
					path 	= _this.attr('href');
			// get current page
			var current = new Array();
					current.page = $('.current-page');
					current.path = location.href.split("#")[0];
			// set url
			history.pushState(null, null, path);
			// scroll to top
			_body.animate({'scrollTop': 0}, 400);
			// check if content exists
			if( content[path] )
			{
				// check if content is not active
				if( ! content[path]["page"].hasClass('current-page') )
				{
					// hide current page
					current["page"].removeClass('current-page').animate({'marginTop':'20%','opacity':0}, 300, function()
					{
						$(this).hide();
						// remove data
						content[current.path]['css'].attr("disabled","disabled");
						// add new data
						content[path]['css'].removeAttr("disabled");
						content[path]['page'].css('display','block').animate({'opacity':'1','marginTop':0}, 300).addClass('current-page');
					});
				}
			}
			// content does not exists
			// load content using ajax
			else
			{
				// run ajax request
				var ajax = $.ajax({
					type : 'post',
					data: {'ajax':true},
					dataType: 'json',
					url: path
				});
				// animate out current page
				current['page'].animate({'marginTop':'20%','opacity':0}, 300, function()
				{
					// hide curren page when faded out
					$(this).hide();
					// define ajax done method
					ajax.done(function( response )
					{
						content[path] = {};
						// create script element
						var script = document.createElement( 'script' );
						script.data = 'text/javascript';
						script.src = response.js;
						// add script element to DOM
						document.body.appendChild(script);
						// add css to head
						_head.append("<link data-path='"+path+"' href='"+response.css+"' type='text/css' rel='stylesheet' \/>");
						
						content[path]["css"] = _head.find("link[data-path='"+path+"']");
						content[path]["css"].attr("disabled", "disabled");
						
						content[path]["js"] = _head.find("script[src='"+response.js+"']").data('path', path);
						
						current['page'].after($('<div class="current-page page">'+response.content+'</div>').css({'opacity':'0','marginTop':'20%'}));
						//

						content[path]['page'] = $('.current-page');
						content[path]['page'].css('display','block').animate({'opacity':'1','marginTop':0}, 300);
						content[path]['css'].removeAttr('disabled');
					});
					// define ajax fail method
					ajax.fail(function()
					{
						current['page'].css('display','block').animate({'marginTop':'0','opacity':1}, 300).addClass('current-page');	
					});
				}).removeClass('current-page');
			}
			// stop propagation if link
			return false;
		});
	}
	
});