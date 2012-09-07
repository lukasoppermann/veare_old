// ----------------------------------------------------
// Base functions used in all or many files
// ----------------------------------------------------
// define functions 
$(function()
{
	// -----------------------
	var _body = $('body');
	var _stage = $('#stage');
	var loaded = false;
	// -----------------------
	// Animate Content
	var animate_content = function( resolution )
	{
		if(loaded == false)
		{
			if(resolution == 'mobile-portrait')
			{
				$('#sidebar').css({'left':'0px'}).animate({'top':'0px'}, 700, 'swing');
			}
			else
			{
				$('#sidebar').css({'top':'0px'}).animate({'left':'0px'}, 500, 'swing');
			}
			// define loaded
			loaded = true;
		}
	};
	// -----------------------
	// query actions	
	var query_actions = function( resolution )
	{
		// console.log(resolution);
		// console.log($(window).width());
		// $('html, body').height(_stage.height());
		_body.trigger('resolutionChange', resolution);
		animate_content(resolution);
		// _stage.width($(document).width());
	};
	// -----------------------
	// create event
	// fire event
	// media queries	
	var queries = [
		{
			context: 'mobile-portrait',
			callback: function() {
				query_actions('mobile-portrait');
				_body.addClass('mobile portrait hide-line-text nav-narrow').removeClass('hovers tablet-small nav-wide landscape tablet screen wide-screen');
			}
		},
		{
			context: 'mobile-landscape',
			callback: function() {
				query_actions('mobile-landscape');
				_body.addClass('mobile landscape hide-line-text nav-narrow').removeClass('hovers tablet-small nav-wide portrait tablet screen wide-screen');
			}
		},
		{
			context: 'tablet-small',
			callback: function() {
				query_actions('tablet-small');
				_body.addClass('hovers tablet-small hide-line-text nav-narrow').removeClass('nav-wide tablet mobile screen wide-screen');
			}
		},
		{
			context: 'tablet',
			callback: function() {
				query_actions('tablet');
				_body.addClass('hovers tablet hide-line-text nav-narrow').removeClass('tablet-small nav-wide mobile screen wide-screen');
			}
		},
		{
			context: 'min-screen',
			callback: function() {
				query_actions('min-screen');
				_body.addClass('hovers nav-wide min-screen hide-line-text').removeClass('tablet-small mobile tablet wide-screen nav-narrow');
			}
		},
		{
			context: 'screen',
			callback: function() {
				query_actions('screen');
				_body.addClass('hovers nav-wide screen').removeClass('tablet-small mobile tablet wide-screen min-screen hide-line-text nav-narrow');
			}
		},
		{
			context: 'wide-screen',
			callback: function() {
				query_actions('wide-screen');
				_body.addClass('hovers nav-wide screen wide-screen').removeClass('tablet-small mobile tablet min-screen hide-line-text nav-narrow');
			}
 		}
	];
	// Go!
	MQ.init(queries);
});