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
		// load view
		view('custom/about', $this->data);
	}
// close class
}