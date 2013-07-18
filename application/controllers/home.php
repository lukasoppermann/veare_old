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
			js_add(array('http://maps.googleapis.com/maps/api/js?sensor=true'), 'first');
		}	
		
		$this->data['meta_title'] = "interface design, print design, branding & information graphics";
		// check for ajax
		$this->data['body_class'] = 'header-absolute';
		$this->view('home/block', $this->data);
	}
	
// close class
}