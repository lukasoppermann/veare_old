<?php if (! defined('BASEPATH')) exit('No direct script access');

class Home extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index( )
	{
		
		$this->data['meta_title'] = "interface design, print design, branding & information graphics";
		// check for ajax
		$this->data['body_class'] = 'loading header-absolute';
		$this->view('home/block', $this->data);
	}
	
// close class
}