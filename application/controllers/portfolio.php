<?php if (! defined('BASEPATH')) exit('No direct script access');

class Portfolio extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index( $tag = null, $permalink = null )
	{
		$data = db_select( 'client_entries', array('type' => 2, 'status' => 1), array('order' => 'position ASC', 'json' => 'data') );
		// sort items by position
		$data = index_array($data, 'position');
		foreach( $data as $key => $values )
		{
			if( $key != 'noindex' )
			{
				$items[$key] = $values;
			}
		}
		if( isset($data['noindex']) && is_array($data['noindex']) )
		{
			$items = array_merge($items, $data['noindex']); 
		}
		
		if( $tag != null && $tag != '' && isset($tag) )
		{
			if( strpos($tag,':') !== false )
			{
				$tag = str_replace('tag:','',$tag);
			}
			else
			{
				$permalink = $tag;
				unset($tag);
			}
			
			
			if($permalink != null)
			{
				$this->item( $permalink, $items, variable($tag) );
			}
			else
			{
				$this->overview( $items, $tag );
			}	
		}
		else
		{
			$this->overview( $items );
		}
	}
	// ------------------------
	// Overview
	function overview( $cards, $tag = null)
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
			// filter
			$card['filter'] = $tag;			
			//
			$this->data['content'][] = $this->load->view('portfolio/card',$card, TRUE); 
		}
		// set filtered
		if( isset($tag) && $tag != null )
		{
			$this->data['filtered'] = 'filtered';
		}
		else
		{
			$this->data['filtered'] = '';
		}
		// filter menu
		$filters = array('interface','print','branding','infographics');
		// begin
		$this->data['tag_menu'] = '<div class="filters uppercase font-size-big font-medium-gray bold">';
		// loop
		foreach($filters as $filter)
		{
			if( $tag == $filter )
			{
				$this->data['tag_menu'] .= '<a class="filter hover-font-orange active-font-orange active" data="'.$filter.'" href="'.base_url(TRUE).'portfolio">'.$filter.'</a>';
			}
			else
			{
				$this->data['tag_menu'] .= '<a class="filter hover-font-orange active-font-orange" data="'.$filter.'" href="'.base_url(TRUE).'portfolio/tag:'.$filter.'">'.$filter.'</a>';
			}
		}
		// end
		$this->data['tag_menu'] .= '</div>';
		//
		$this->data['content'] = implode('',$this->data['content']);
		// load view
		$this->view('portfolio/index', $this->data, 'portfolio');
	}
	// ------------------------
	// Item
	function item( $permalink = null, $items, $tag )
	{
		// $this->output->cache(360);
		$items = index_array($items, 'permalink');
		$this->data = array_merge($items[$permalink], $this->data);
		// grab all image ids
		if( isset($this->data['images']) && count($this->data['images']) > 0 )
		{
			// retrieve images from db
			$this->data['images'] = db_select('files', array('status' => 1, 'id' => array($this->data['images'])), array('json' => 'data', 'index' => 'id', 'index_single' => true) );
		}
		// prepare stage
		if( isset($items[$permalink]['stage']) )
		{
			if( $items[$permalink]['stage']['type'] == 'browser' )
			{
				// preapre data
				$browser['image'] = $this->data['images'][$items[$permalink]['stage']['image']]['filename'].'.'.$this->data['images'][$items[$permalink]['stage']['image']]['ext'];
				$browser['browser_color'] = 'white';
				// load view
				$this->data['stage_content'] = $this->load->view('assets/browser-frame',$browser, TRUE);
			}
			elseif( $items[$permalink]['stage']['type'] == 'full' )
			{
				$this->data['stage_content'] = '<img class="full-width image" src="'.base_url(TRUE).'media/'.$this->data['images'][$items[$permalink]['stage']['image']]['filename'].'.'.$this->data['images'][$items[$permalink]['stage']['image']]['ext'].'" alt="'.$items[$permalink]['title'].'" />';
			}
			else
			{
				$this->data['stage_content'] = '<img class="centered image" src="'.base_url(TRUE).'media/'.$this->data['images'][$items[$permalink]['stage']['image']]['filename'].'.'.$this->data['images'][$items[$permalink]['stage']['image']]['ext'].'" alt="'.$items[$permalink]['title'].'" />';
			}
		}
		// add assets
		$this->data['body_class'] = ' white-logo';
		$this->data['filter'] = $tag;
		// load view
		$this->view('portfolio/item', $this->data);
	}
// close class
}