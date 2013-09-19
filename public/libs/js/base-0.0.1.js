// get minified instance
var MINI = require('minified');
var $ = MINI.$, $$=MINI.$$, EE=MINI.EE;
// define variables
var win,
    resolution, 
    _body, 
    _html,
    pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : '1'; // get Pixel Ratio

// once minfied is loade
$(function() {
    // grab body
    _body = $('body');
	// define media queries
	var queries = [
		{
			context: 'mobile-portrait',
			match: function() {
				_body.set('+mobile +portrait').trigger('resolutionChange', 'mobile-portrait');
			},
            unmatch: function() {
				_body.set('-mobile -portrait');
            }
		},
		{
			context: 'mobile-landscape',
			match: function() {
				_body.set('+mobile +landscape').trigger('resolutionChange', 'mobile-landscape');
			},
            unmatch: function() {
				_body.set('-mobile -landscape');
            }
		},
		{
			context: 'tablet-small',
			match: function() {
				_body.set('+tablet +small').trigger('resolutionChange', 'tablet-small');
			},
            unmatch: function() {
				_body.set('-tablet -small');   
            }
		},
		{
			context: 'tablet',
			match: function() {
				_body.set('+tablet +big').trigger('resolutionChange', 'tablet');
			},
            unmatch: function() {
				_body.set('-tablet -big');
            }
		},
		{
			context: 'screen',
			match: function() {
				_body.set('+hovers +screen +normal').trigger('resolutionChange', 'screen');
			},
            unmatch: function() {
				_body.set('-hovers -screen -normal');
            }
		},
		{
			context: 'wide-screen',
			match: function() {
				_body.set('+hovers +screen +wide').trigger('resolutionChange', 'wide-screen');
			},
            unmatch: function() {
				_body.set('-hovers -screen -wide');
            }
 		}
	];
	// Run media query
	MQ.init(queries);
    // --------------------------------------
    // click add class
    $('#intro_name').on('click', $('.introduction').toggle('active'));
    // open about when activated
    $('.anchor[data-section="about"]').on('click', function(){
        $('#about').on('activated', function(){
            $('.introduction').set('+active');
        });
    });
    // nav
    $('.anchor').on('click', function(){
        var self = $(this);
        if( !self.is('.anchor') ){
            self = self.trav('parentNode', '.anchor');
        }
        $.scrollOffset($('#'+self.get('@data-section')).offset().y);
    });
    // define dial
    MINI.M.prototype.dial = function (properties1, properties2, linearity) {

        var self = this;

        var interpolate = (typeof linearity == 'function') ? linearity : function(startValue, endValue, t) 
        {
            return startValue + t * (endValue - startValue) * (linearity + (1-linearity) * t * (3 - 2*t));
        };

        linearity = linearity || 0;

        function toString(s) { // dependency, cut&pasted from minified-web-src.js
            return s!=null ? ''+s : '';
        }

        function replace(s, regexp, sub) { // dependency, cut&pasted from minified-web-src.js
            return toString(s).replace(regexp, sub||'');
        }

        function extractNumber(v) { // dependency, cut&pasted from minified-web-src.js
            return parseFloat(replace(v, /^[^\d-]+/));
        }
    
    	function eachObj(obj, cb) {
    		for (var n in obj)
    			if (obj.hasOwnProperty(n))
    				cb(n, obj[n]);
    		return obj;
    	}

        function getColorComponent(colorCode, index) {
            return (/^#/.test(colorCode)) ?
                parseInt(colorCode.length > 6 ? colorCode.substr(1+index*2, 2)
                : ((colorCode=colorCode.charAt(1+index))+colorCode), 16)
                : parseInt(replace(colorCode, /[^\d,]+/g).split(',')[index]);
        }

        return function(t)
        {
            eachObj(properties1, function(name, start) 
            {

                var newValue = 'rgb(', end=properties2[name];

                if (/^#|rgb\(/.test(end)) 
                { // color in format '#rgb' or '#rrggbb' or 'rgb(r,g,b)'?
                    for (var i = 0; i < 3; i++)
                    {

                        newValue += Math.round(interpolate(getColorComponent(start, i), getColorComponent(end, i), t)) + (i < 2 ? ',' : ')');
                    }
                }
                else
                {
                    newValue = replace(end, /-?[\d.]+/, toString(interpolate(extractNumber(start), extractNumber(end), t)));
                }
                self.set(name, t>=1?end:t<=0?start:newValue);

            });

        };
    };
    //
    $.onScroll(150,function(){
        $('#header').set('+active');
    },function(){
        $('#header').set('-active');
    });
    // build scrolling magic
    var sections = $('section');
    var sections_pos = {};
    
    sections.each(function(item, index){
        sections_pos[index] = {};
        sections_pos[index].item = $(item);
        sections_pos[index].top =  sections_pos[index].item.offset().y;
        sections_pos[index].bottom = sections_pos[index].item.offset().y + parseInt( sections_pos[index].item.get('$height'));
    });
    var f = null;
    var scrolling = false;
    
    if( scrolling == false )
    {
        $(document).on('scroll', function() 
        {
        	clearTimeout( f );
            var current_pos = $.scrollOffset();
            for (var key in sections_pos) 
            {
                if (sections_pos.hasOwnProperty(key)) 
                {
                    var obj = sections_pos[key];
                    var tmp_pos = Math.floor(current_pos);
                
                    if( tmp_pos >= obj.top && tmp_pos < obj.bottom )
                    {   
                        if( current_pos < obj.top )
                        {
                            var move = obj.top;
                        }
                        else if( current_pos+$.viewport() > obj.bottom )
                        {
                            var move = obj.bottom-$.viewport();
                        }
                        // BG Fade
                        var bgFade = _body.dial({$backgroundColor: obj.item.get('@data-color')},{$backgroundColor: obj.item.trav('nextSibling', 1).get('@data-color')}, 1);
                        var stop = obj.item.offset().y+parseInt(obj.item.get('$height'));
                        bgFade(obj.item.scrollPercent(stop-Math.ceil($.viewport()/2.5), stop));
                        // Nav Percentage
                        var navPercent = $('.nav-item[data-section='+obj.item.get('@id')+'] .percent').dial({$height: '0%'},{$height: '100%'}, 1);
                        navPercent(obj.item.scrollPercent(obj.item.offset().y, obj.item.offset().y+(parseInt(obj.item.get('$height'))/1.5)));
                        
                        $('.nav-item[data-section='+obj.item.get('@id')+'] .percent').set('@data-percent', obj.item.scrollPercent(obj.item.offset().y, obj.item.offset().y+(parseInt(obj.item.get('$height'))/1.5)));
                        // add active class
                        obj.item.set('+active');
                        $('.nav-item[data-section='+obj.item.get('@id')+']').set('+active');
                    }
                    else
                    {
                        obj.item.set('-active');                
                        $('.nav-item[data-section='+obj.item.get('@id')+']').set('-active');
                    }
                }
            }
        });
    };

});