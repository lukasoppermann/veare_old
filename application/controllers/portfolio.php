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
		css_add('cards, portfolio', 'page');
		js_add('jquery.fs_filter, portfolio', 'page');
		// define variables
		$tag_menu = array();
		// get entries from database
		$cards = db_select( 'client_entries', array('type' => 3, 'status' => 1), array('limit' => 50, 'order' => 'date DESC', 'json' => 'data') );
		// grab all image ids
		foreach($cards as $card)
		{
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
		// loop through posts
		foreach($cards as $card)
		{
			$card['tags'] = explode(',',$card['tags']);
			// add image
			if( isset($card['card-image']) && isset($images[$card['card-image']]) && is_array($images[$card['card-image']]) )
			{
				$card['images'] = $images[$card['card-image']];
			}
			// load into view
			unset($card['css'],$card['css_file']);
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
		$this->view('portfolio/index', $this->data, 'portfolio');
	}
	// ------------------------
	// Item
	function item( $permalink = null )
	{
		// font callback
		$this->data['fonts_callback'][] = "$('.section_menu').fs_sticky_top('refresh'); $('.column').fs_equal_height();";
		//
		$this->data['body_class'] = variable($this->data['body_class']).' item-view';
		// get items from database
		$item = db_select( 'client_entries', array('type' => 3, 'permalink' => $permalink), array('json' => 'data', 'single' => TRUE));
		//
		$css = '';
		if( isset($item['css_file']) && $item['css_file'] != null )
		{
			$css = ','.$item['css_file'];
		}
		// add assets
		css_add('portfolio_item, fs.slides'.$css, 'page');
		js_add('fs.equal_height, fs.anker, fs.sticky_top, fs.slides, portfolio_item', 'page');
		// load item if exists
		if( $item != null )
		{
			$this->data = array_merge($this->data, $item);
			$this->view('portfolio/item', $this->data, 'portfolio_item');
		}
		else
		{
			$this->overview();
		}
	}
// close class
}