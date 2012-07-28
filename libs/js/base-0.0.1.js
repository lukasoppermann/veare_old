// ----------------------------------------------------
// Base functions used in all or many files
// ----------------------------------------------------
// define functions 
$(function()
{
	// -----------------------
	// logo change
	var current = 'small';
	var _sidebar = $('#sidebar');
	var swap_logo = function( _body, _logo_inner )
	{
		var time = 300;
		if( !_sidebar.hasClass('animate') )
		{
			time = 0;
		}

		if( _body.hasClass('nav-wide') && current == 'small' )
		{
			current = 'big';
			_logo_inner.animate({'margin-left': '-100px'}, time, function(){
				_logo_inner.css({'margin-left': '-200px'}).addClass('logo-big').removeClass('logo-small').animate({'margin-left': '0'}, time);
			});
		}
		else if(  !_body.hasClass('nav-wide') && current == 'big' )
		{
			current = 'small';
			_logo_inner.animate({'margin-left': '-200px'}, time, function(){
				_logo_inner.addClass('logo-small').removeClass('logo-big').css({'margin-left': '-100px'}).animate({'margin-left': '0'}, time);
			});
		}
	};
	// -----------------------
	var _body = $('body');
	var _logo_inner = $('#logo').find('.logo-inner');
	// -----------------------
	// logo animation
	var queries = [
		{
			context: 'mobile',
			callback: function() {
				console.log('mobile');
				_body.addClass('mobile hide-line-text').removeClass('nav-wide tablet screen wide-screen');
				swap_logo( _body, _logo_inner );
			}
		},
		{
			context: 'tablet',
			callback: function() {
				console.log('tablet');
				_body.addClass('tablet hide-line-text').removeClass('nav-wide mobile screen wide-screen');
				swap_logo( _body, _logo_inner );
			}
		},
		{
			context: 'min-screen',
			callback: function() {
				console.log('min-screen');
				_body.addClass('nav-wide min-screen hide-line-text').removeClass('mobile tablet wide-screen');
				swap_logo( _body, _logo_inner );
			}
		},
		{
			context: 'screen',
			callback: function() {
				console.log('screen');
				_body.addClass('nav-wide screen').removeClass('mobile tablet wide-screen min-screen hide-line-text');
				swap_logo( _body, _logo_inner );
			}
		},
		{
			context: 'wide-screen',
			callback: function() {
				console.log('wide');
				_body.addClass('nav-wide screen wide-screen').removeClass('mobile tablet min-screen hide-line-text');
				swap_logo( _body, _logo_inner );
			}
 		}
	];
	// Go!
	MQ.init(queries);
	// -----------------------
	// define variables
	var _content_wrapper = $('#content_wrapper');
	var _stage = $('#stage');
	var win_width = 0;
	var total_width = 0;
	// debounced resize event (fires once every 100ms)
	$(window).fs_resize(function()
	{
		// total_width = win_width-$('#sidebar').width();
		// 
		// _stage.css({'height':'100%','width':total_width});
		// _content_wrapper.css({'height':'100%','width':total_width});
	});
	// -----------------------
	// when everything is fully loaded
	$(window).load( function() 
	{
		$('#stage').height($('#wrapper').height());
		// win_width = $(window).width();
		// total_width = win_width-$('#sidebar').width();
		// 
		// $('html, body, #wrapper').css({'height':'100%','width':'100%'});
		// 
		// _stage.css({'height':'100%','width':total_width});
		// _content_wrapper.css({'height':'100%','width':total_width});
		// // -----------------------
		// // add animation to sidebar
		// $('#sidebar, #follow_nav, .menu-item-link .text').addClass('animate');
	});
});