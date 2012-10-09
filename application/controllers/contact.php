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
		js_add(array('http://maps.google.com/maps/api/js?sensor=true','gmaps','contact'), 'page');
		//
		$this->data['sidebar_class'] = 'shadow';
		$this->data['body_class'] = variable($this->data['body_class']).' no-line';
		// load view
		$this->view('custom/contact', $this->data, 'contact');
	}
}