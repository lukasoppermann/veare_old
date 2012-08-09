<?php if (! defined('BASEPATH')) exit('No direct script access');

class Contact extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index()
	{	
		// desktop version
		if(mobile() != true)
		{
			css_add('contact');
			js_add(array('http://maps.google.com/maps/api/js?sensor=true','jquery.gmaps','contact'));
			//
			$this->data['sidebar_class'] = 'shadow';
			$this->data['body_class'] = variable($this->data['body_class']).' no-line';
			// load view
			view('custom/contact', $this->data);
		}
		// mobile version
		else
		{
			css_add('mobile.contact, widget');
			js_add('mobile.contact');
			// load view
			$this->data['page'] = $this->load->view('custom/contact_mobile', $this->data, TRUE);
			$this->load->view('template_mobile', $this->data);
		}
	}
	
	// function send_email()
	// {
	// 	$email 		= 'oppermann.lukas@googlemail.com';
	// 	$subject 	= 'From '.$this->input->post('email').' via veare.net';
	// 	$body 		= '<div></div>';
	// 	//
	// 	$ve = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$";
	// 	if( ereg( $ve, $this->input->post('email') ) )
	// 	{	
	// 		$rn = "\r\n";
	// 		
	// 		$body = '<div>'.$this->input->post('message').'</div>';
	// 						 
	// 		$header	= 'From: '. $this->input->post('email') .$rn; 				
	// 		$header .= 'MIME-Version: 1.0'. $rn; 
	// 		$header .= 'Content-type: text/html; charset=utf-8';
	// 		//
	// 		if( !mail($email, $subject, $body, $header) )
	// 		{	
	// 			echo json_encode(array('error' => 'There was a problem and the message was probably not sent.'));
	// 		}
	// 		else
	// 		{	
	// 			sleep(2); // send animation 	
	// 			echo json_encode(array('sent' => 'true'));
	// 		}
	// 	}
	// 	else
	// 	{
	// 		echo json_encode(array('error' => 'not sent'));
	// 	}
	// }
	
}