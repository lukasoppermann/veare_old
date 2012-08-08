// ----------------------------------------------------
// Base functions used in all or many files
// ----------------------------------------------------
// define functions 
$(function()
{
	// -----------------------
	// query actions	
	var query_actions = function( resolution )
	{
		var _stage = $('#stage');
		$('html, body').height(_stage.height());
		$('body').trigger('resolutionChange', resolution);
		_stage.width($(document).width());
	};
	// -----------------------
	var _body = $('body');
	var _logo_inner = $('#logo').find('.logo-inner');
	// -----------------------
	// create event
	// fire event
	// media queries	
	var queries = [
		{
			context: 'mobile-portrait',
			callback: function() {
				query_actions('mobile-portrait');
				_body.addClass('mobile portrait hide-line-text nav-narrow').removeClass('nav-wide landscape tablet screen wide-screen');
			}
		},
		{
			context: 'mobile-landscape',
			callback: function() {
				query_actions('mobile-landscape');
				_body.addClass('mobile landscape hide-line-text nav-narrow').removeClass('nav-wide portrait tablet screen wide-screen');
			}
		},
		{
			context: 'tablet',
			callback: function() {
				query_actions('tablet');
				_body.addClass('tablet hide-line-text nav-narrow').removeClass('nav-wide mobile screen wide-screen');
			}
		},
		{
			context: 'min-screen',
			callback: function() {
				query_actions('min-screen');
				_body.addClass('nav-wide min-screen hide-line-text').removeClass('mobile tablet wide-screen nav-narrow');
			}
		},
		{
			context: 'screen',
			callback: function() {
				query_actions('screen');
				_body.addClass('nav-wide screen').removeClass('mobile tablet wide-screen min-screen hide-line-text nav-narrow');
			}
		},
		{
			context: 'wide-screen',
			callback: function() {
				query_actions('wide-screen');
				_body.addClass('nav-wide screen wide-screen').removeClass('mobile tablet min-screen hide-line-text nav-narrow');
			}
 		}
	];
	// Go!
	MQ.init(queries);
	$('body').on('resolutionChange', function(e, device){
		console.log(device);
	});
	// -----------------------
	// when everything is fully loaded
	$(window).load( function() 
	{
		$('body').height($('#stage').height());
	});
});