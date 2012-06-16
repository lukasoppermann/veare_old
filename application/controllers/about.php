<?php if (! defined('BASEPATH')) exit('No direct script access');

class About extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
		// load assets
		css_add('widget');
	}
	
	function index()
	{	
		// load assets
		css_add('contact');
		js_add('jquery, contact');
		// add classes
		$this->data['sidebar_class'] = ' side-shadow';
		
		// load view
		view('custom/about', $this->data);
	}
// close class
}