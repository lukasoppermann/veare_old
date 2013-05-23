<?php if (! defined('BASEPATH')) exit('No direct script access');

class Home extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index( )
	{
		
		// font callback
		// $this->data['fonts_callback'][] = "$('body').trigger('resize');";
		// // add css and js files
		// css_add('about','page');
		// js_add('about','page');
		// //
		// $this->data['meta_title'] = 'About the studio';
		// // check for ajax
		$this->view('home/block', $this->data);
	}
	
// close class
}