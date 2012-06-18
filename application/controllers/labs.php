<?php if (! defined('BASEPATH')) exit('No direct script access');

class Labs extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index()
	{	
		// load assets
		css_add('widget, labs');
		js_add('labs');
		// get entries from database
		$labs = db_select( 'client_entries', array('type' => 2, 'status' => 1), array('limit' => 50, 'order' => 'date DESC', 'json' => 'data') );
		// loop through posts
		foreach($labs as $lab)
		{
			// time difference
			$lab['date'] = time_ago(mysql_to_unix($lab['date']));
			// load into view
			$entries[] = $this->load->view('labs/labs_item', $lab, TRUE);
		}
		//
		$this->data['content'] = implode('',$entries);
		// load view
		view('default', $this->data);
	}
// close class
}