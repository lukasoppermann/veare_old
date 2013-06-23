<?php if (! defined('BASEPATH')) exit('No direct script access');

class Portfolio extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index( $permalink = null )
	{
		$items = db_select( 'client_entries', array('type' => 4, 'status' => 1), array('order' => 'date DESC', 'json' => 'data') );
	
		if( $permalink != null && $permalink != '' && isset($permalink) )
		{
			$this->item( $permalink );
		}
		else
		{
			$this->overview( $items );
		}
	}
	// ------------------------
	// Overview
	function overview( $cards )
	{
		// // load assets
		css_add('card');
		js_add('jquery.freetile, jquery.hirestext, portfolio', 'default');
		// // define variables
		// $tag_menu = array();
		// // get entries from database
		// $cards = db_select( 'client_entries', array('type' => 3, 'status' => 1), array('limit' => 50, 'order' => 'date DESC', 'json' => 'data') );
		// grab all image ids
		foreach($cards as $id => $card)
		{
			unset($card['css'],$card['css_file'],$cards[$id]['css'],$cards[$id]['css_file']);
			if( isset($card['card-image']) )
			{
				$images[$card['card-image']] = $card['card-image'];
			}
		}
		if( isset($images) && count($images) > 0 )
		{
			// retrieve images from db
			$images = db_select('files', array('status' => 1, 'id' => array($images)), array('json' => 'data', 'index' => 'id', 'index_single' => true) );
		}
		$empty_card = array();
		// loop through posts
		foreach($cards as $card)
		{
			// merge variables to outfox view cache
			$card = array_merge($empty_card, $card);
			// prep tags
			$card['tags'] = explode(',',$card['tags']);
			// add image
			if( isset($card['card-image']) && isset($images[$card['card-image']]) && is_array($images[$card['card-image']]) )
			{
				$card['images'] = $images[$card['card-image']];
			}
			//
			$this->data['content'][] = $this->load->view('portfolio/card',$card, TRUE); 
		}
		//
		$this->data['content'] = implode('',$this->data['content']);
		// tag menu
 		$this->data['tag_menu'] = '<div class="filters uppercase font-size-big font-medium-gray bold"><div class="filter hover-font-orange" data="interface">interface</div>
		<div class="filter hover-font-orange" data="print">print</div>
		<div class="filter hover-font-orange" data="branding">branding</div>
		<div class="filter hover-font-orange" data="infographics">infographics</div>
		</div>';
		// load view
		$this->view('portfolio/index', $this->data, 'portfolio');
	}
	// ------------------------
	// Item
	function item( $permalink = null )
	{
		// add assets
		$this->data['body_class'] = ' white-logo header-absolute';
		// load view
		$this->view('portfolio/item', $this->data);
	}
// close class
}