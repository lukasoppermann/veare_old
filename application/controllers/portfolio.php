<?php if (! defined('BASEPATH')) exit('No direct script access');

class Portfolio extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index()
	{	
		// load assets
		css_add('cards, portfolio');
		js_add('portfolio');
		// get entries from database
		$cards = db_select( 'client_entries', array('type' => 2, 'status' => 1), array('limit' => 50, 'order' => 'date DESC', 'json' => 'data') );
		// loop through posts
		foreach($cards as $card)
		{
			// load into view
			$entries[] = $this->load->view('portfolio/card', $card, TRUE);
		}
		//
		$this->data['content'] = implode('',$entries);
		// load view
		view('default', $this->data);
	}
// close class
}