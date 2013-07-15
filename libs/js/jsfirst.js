// -----------------------
// query actions	
var query_actions = function( res )
{
	resolution = res;
	
	_body.trigger('resolutionChange', res);
};
// -----------------------
// media queries	
var queries = [
	{
		context: 'mobile-portrait',
		match: function() {
			_body.addClass('mobile portrait').removeClass('hovers tablet-small tablet-medium landscape tablet screen wide-screen');
			query_actions('mobile');
		}
	},
	{
		context: 'mobile-landscape',
		match: function() {
			_body.addClass('mobile landscape').removeClass('hovers tablet-small tablet-medium portrait tablet screen wide-screen');
			query_actions('mobile');
		}
	},
	{
		context: 'tablet-small',
		match: function() {
			_body.addClass('tablet-small').removeClass('hovers tablet tablet-medium mobile screen wide-screen');
			if( !_body.hasClass('loaded-tablet') )
			{
				_body.addClass('hovers');
			}
			query_actions('tablet-small');
		}
	},
	{
		context: 'tablet',
		match: function() {
			_body.addClass('tablet').removeClass('hovers tablet-small mobile screen wide-screen');
			if( !_body.hasClass('loaded-tablet') )
			{
				_body.addClass('hovers');
			}
			query_actions('tablet');
		}
	},
	{
		context: 'screen',
		match: function() {
			_body.addClass('hovers screen').removeClass('tablet-small tablet-medium mobile tablet wide-screen min-screen');
			query_actions('screen');
		}
	},
	{
		context: 'wide-screen',
		match: function() {
			_body.addClass('hovers screen wide-screen').removeClass('tablet-small tablet-medium mobile tablet min-screen');
			query_actions('wide-screen');
		}
	}
];
// Go!
MQ.init(queries);	