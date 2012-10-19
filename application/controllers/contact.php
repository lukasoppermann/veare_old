<?php if (! defined('BASEPATH')) exit('No direct script access');

class Contact extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index()
	{	
		// assets
		css_add('contact', 'page');
		js_add(array('gmaps','contact','http://maps.googleapis.com/maps/api/js?sensor=true&callback=init_contact'), 'page');
		//
		$this->data['sidebar_class'] = 'shadow';
		// load view
		$this->view('custom/contact', $this->data, 'contact');
	}
}