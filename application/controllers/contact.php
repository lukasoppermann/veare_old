<?php if (! defined('BASEPATH')) exit('No direct script access');

class Contact extends MY_Controller {

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
		// load view
		view('custom/contact', $this->data);
	}
	
	function entry()
	{
		
	}
	
	function send_email()
	{
		$email 		= 'oppermann.lukas@googlemail.com';
		$subject 	= 'From '.$this->input->post('email').' via veare.net';
		$body 		= '<div></div>';
		//
		$ve = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$";
		if( ereg( $ve, $this->input->post('email') ) )
		{	
			$rn = "\r\n";
			
			$body = '<div>'.$this->input->post('message').'</div>';
							 
			$header	= 'From: '. $this->input->post('email') .$rn; 				
			$header .= 'MIME-Version: 1.0'. $rn; 
			$header .= 'Content-type: text/html; charset=utf-8';
			//
			if( !mail($email, $subject, $body, $header) )
			{	
				echo json_encode(array('error' => 'There was a problem and the message was probably not sent.'));
			}
			else
			{	
				sleep(2); // send animation 	
				echo json_encode(array('sent' => 'true'));
			}
		}
		else
		{
			echo json_encode(array('error' => 'not sent'));
		}
	}
	
}