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
	// Load Content
	var content = function(  )
	{
		if( $('#about').length == 0 )
		{
			$.ajax({
				type : 'post',
				data: {'ajax':true},
				dataType: 'html',
				url: CI_BASE+'en/about',
			}).done(function(response)
			{
				_stage.prepend('<div id="about" class="hidden-page" style="display:none;">'+response+'</div>');
				$('.current-page').fadeOut();
				$('#about').addClass('current-page').removeClass('hidden-page').css({'display':'block','marginTop':50}).animate({'opacity':1,'marginTop':0}, 500);
			}
			).fail(function(){ 
				alert("Something went wrong."); 
			});
		}
		else
		{
			$('.current-page').fadeOut();
			$('#about').addClass('current-page').removeClass('hidden-page').fadeIn();
		}
	}
	$('#nav').on('click', '.menu-item-link', function(e){	
		e.preventDefault();
		content();
	});
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
				_body.addClass('tablet-small hide-line-text nav-narrow').removeClass('hovers nav-wide tablet mobile screen wide-screen');
				if( !_body.hasClass('loaded-tablet') )
				{
					_body.addClass('hovers');
				}
			}
		},
		{
			context: 'tablet',
			callback: function() {
				query_actions('tablet');
				_body.addClass('tablet hide-line-text nav-narrow').removeClass('hovers tablet-small nav-wide mobile screen wide-screen');
				if( !_body.hasClass('loaded-tablet') )
				{
					_body.addClass('hovers');
				}
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