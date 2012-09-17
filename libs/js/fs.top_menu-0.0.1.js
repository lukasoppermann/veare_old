function filterPath(string) {
	return string.replace(/^\//,'')
	.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
	.replace(/\/$/,'');
}
		
var locationPath = filterPath(location.pathname);
if($.browser.safari) scrollElem = $("body") 
else scrollElem = $("html,body")
$('a[href*=#]').each(function() {
var thisPath = filterPath(this.pathname) || locationPath;
if (  locationPath == thisPath
&& (location.hostname == this.hostname || !this.hostname)
&& this.hash.replace(/#/,'') ) {
	 var $target = $(this.hash), target = this.hash;
	if (target) {
		$(this).click(function(event) {
		 	event.preventDefault();
		 	var targetOffset =  Math.round($target.offset().top);
		 	$(scrollElem).animate({scrollTop: targetOffset-70}, 400);
	});
  }
}