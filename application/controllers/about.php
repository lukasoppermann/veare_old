<?php if (! defined('BASEPATH')) exit('No direct script access');

class About extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index()
	{	
		// load assets
		css_add('about');
		js_add('about');
		// add classes
		$this->data['sidebar_class'] = 'shadow';
		
		// load view
		view('custom/about', $this->data);
	}
// close class
}