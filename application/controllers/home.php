<?php if (! defined('BASEPATH')) exit('No direct script access');

class Home extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index( )
	{
		if( mobile() != true || ipad() == true )
		{
			js_add(array('http://maps.googleapis.com/maps/api/js?sensor=true','gmaps'), 'default');
		}	
		// font callback
		// $this->data['fonts_callback'][] = "$('body').trigger('resize');";
		// // add css and js files
		// css_add('about','page');
		// js_add('about','page');
		// //
		// $this->data['meta_title'] = 'About the studio';
		// // check for ajax
		$this->data['body_class'] = 'loading header-absolute';
		
		$this->view('home/block', $this->data);
	}
	
// close class
}