<?php if (! defined('BASEPATH')) exit('No direct script access');

class Blog extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
		
	}
	
	function index()
	{	
		// load view
		view('default', $this->data);
	}
	
}