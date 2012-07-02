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
			// define tag menu
			$tag_menu = array();
			// tags
			foreach( explode(',',$card['tags']) as $tag )
			{
				// prepare tag
				$tag = trim($tag);
				// add tag to menu if not existing
				if( !array_key_exists($tag, $tag_menu) )
				{
					$tag_menu[$tag] = '<li class="filter-item" data-filter="'.$tag.'">'.$tag.'</li>';
				}
			}
		}
		// tag menu
 		$this->data['tag_menu'] = '<ul id="tag_menu" class="filter-list">'.implode('',$tag_menu).'</ul>';
		//
		$this->data['content'] = implode('',$entries);
		// load view
		view('portfolio/portfolio', $this->data);
	}
// close class
}