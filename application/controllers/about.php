<?php if (! defined('BASEPATH')) exit('No direct script access');

class About extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index( )
	{
		// font callback
		$this->data['fonts_callback'][] = "$('body').trigger('resize');";
		
		// check for ajax
		if( isset($_POST['ajax']) )
		{
			echo json_encode(array(
				'content' => $this->load->view('custom/about', $this->data, TRUE),
				'css' 		=> css('default'),
				'js' 			=> js('default', TRUE) 
			));
		}
		else
		{
			// load view
			view('custom/about', $this->data);
		}
	}
// close class
}