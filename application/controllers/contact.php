<?php if (! defined('BASEPATH')) exit('No direct script access');

class Contact extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index()
	{	
		css_add('contact');
		js_add(array('http://maps.google.com/maps/api/js?sensor=true','jquery.gmaps','contact'));
		//
		$this->data['sidebar_class'] = 'shadow';
		$this->data['body_class'] = variable($this->data['body_class']).' no-line';
		// load view
		view('custom/contact', $this->data);
	}
}