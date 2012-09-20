<?php if (! defined('BASEPATH')) exit('No direct script access');

class Portfolio extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index( $permalink = null )
	{
		if( $permalink == null )
		{
			$this->overview();
		}
		else
		{
			$this->item( $permalink );
		}
	}
	// ------------------------
	// Overview
	function overview()
	{	
		// load assets
		css_add('cards, portfolio');
		js_add('jquery.fs_filter, portfolio');
		// define variables
		$tag_menu = array();
		// get entries from database
		$cards = db_select( 'client_entries', array('type' => 3, 'status' => 1), array('limit' => 50, 'order' => 'date DESC', 'json' => 'data') );
		// grab all image ids
		$images = array();
		foreach($cards as $card)
		{
			if( isset($card['card-image']) )
			{
				$images[$card['card-image']] = $card['card-image'];
			}
		}
		// retrieve images from db
		$images = db_select( 'files', array('status' => 1, 'id' => array($images)), array('json' => 'data', 'index' => 'id') );
		// loop through posts
		foreach($cards as $card)
		{
			$card['tags'] = explode(',',$card['tags']);
			// add image
			if( isset($card['card-image']) )
			{
				$card['images'] = $images[$card['card-image']][key($images[$card['card-image']])];
			}
			// load into view
			$entries[] = $this->load->view('portfolio/card', $card, TRUE);
			// tags
			foreach( $card['tags'] as $tag )
			{
				// prepare tag
				$tag = trim($tag);
				// add tag to menu if not existing
				if( !array_key_exists($tag, $tag_menu) )
				{
					$tag_menu[$tag] = '<li class="filter-item" data-value="'.$tag.'">#'.$tag.'<span class="close">×</span></li>';
				}
			}
		}
		// tag menu

 		$this->data['tag_menu'] = '<div class="filter-list">
				<div class="group">
					<ul id="tag_menu" data-filter="tag" class="filters tag">'.implode('',$tag_menu).'</ul>
				</div></div>';
		//
		$this->data['content'] = implode('',$entries);
		// load view
		view('portfolio/index', $this->data);
	}
	// ------------------------
	// Item
	function item( $permalink = null )
	{
		// add assets
		css_add('portfolio_item');
		js_add('fs.equal_height, fs.top_menu, portfolio_item');
		//
		$this->data['body_class'] = variable($this->data['body_class']).' item-view';
		// get items from database
		$item = db_select( 'client_entries', array('type' => 3, 'permalink' => $permalink), array('json' => 'data', 'single' => TRUE));
		// load item if exists
		if( $item != null )
		{
			$this->data = array_merge($this->data, $item);
			view('portfolio/item', $this->data);
		}
		else
		{
			$this->overview();
		}
	}
// close class
}