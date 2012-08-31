<?php if (! defined('BASEPATH')) exit('No direct script access');

class About extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index()
	{	
		css_add('about');
		js_add('about');
		// font callback
		$this->data['fonts_callback'] = "function(){
			// create active bgs
			$('.active-bg.right').each(function(){
				var _this = $(this);
				_this.css({'marginLeft':$(window).width(),'width':$('.active-bg').parents('.column').width()+60+($('#stage').width()-$('.active-bg').position().left), 'height':$('.active-bg').parents('.column').height()+60});
			});
			$('.active-bg.left').each(function(){
				var _this = $(this);
				_this.css({'width':_this.parents('.column').width()+60, 'height':_this.parents('.column').height()+60});
			});
		}";
		// load view
		view('custom/about', $this->data);
	}
// close class
}