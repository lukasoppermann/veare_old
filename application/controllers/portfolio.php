<?php if (! defined('BASEPATH')) exit('No direct script access');

class Portfolio extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	
	function index( $tag = null, $permalink = null )
	{
		// // load assets
		css_add('card');
		js_add('jquery.freetile, portfolio', 'default');
        
		if( $tag == 'cleancache' )
		{
			$this->cache->clean();
		}
		// --------------------------------------------------------------------
		// get items
		if ( ! $items = $this->cache->get('portfolio_items'))
		{
			// load menu model
			$this->load->model('Portfolio_model','', TRUE);
			
			$items = $this->Portfolio_model->items();
			// Save into the cache for 24h
			$this->cache->save('portfolio_items', $items, 86400);
		}	
		
		$this->data['meta_title'] = "design portfolio – interface design, print design, branding & information graphics";
		
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
			if ( ! $overview_images = $this->cache->get('overview_images'))
			{
				// load menu model
				$this->load->model('Portfolio_model','', TRUE);
				// retrieve images from db
				$overview_images = $this->Portfolio_model->images( $images );
				// Save into the cache for 24h
				$this->cache->save('overview_images', $overview_images, 86400);
			}
			
			$images = $overview_images;
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
		// add dribble card
		$this->data['content'][] = $this->load->view('portfolio/dribble_card','', TRUE); 
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
				$this->data['tag_menu'] .= '<a class="filter hover-font-orange active-font-orange active" data-category="'.$filter.'" href="'.base_url(TRUE).'portfolio">'.$filter.'</a>';
			}
			else
			{
				$this->data['tag_menu'] .= '<a class="filter hover-font-orange active-font-orange" data-category="'.$filter.'" href="'.base_url(TRUE).'portfolio/tag:'.$filter.'">'.$filter.'</a>';
			}
		}
		// end
		$this->data['tag_menu'] .= '</div>';
		//
		$this->data['content'] = implode('',$this->data['content']);
		// load view
		$this->view('portfolio/index', $this->data);
	}
	// ------------------------
	// Item
	function item( $permalink = null, $items, $tag )
	{

		$items = index_array($items, 'permalink');
		$this->data = array_merge($items[$permalink], $this->data);
		// grab all image ids
		if( isset($this->data['images']) && count($this->data['images']) > 0 )
		{
			// retrieve images from db
			if ( ! $imgs[$permalink] = $this->cache->get('images_'.$permalink))
			{
				// load menu model
				$this->load->model('Portfolio_model','', TRUE);
				// retrieve images from db
				$imgs[$permalink] = $this->Portfolio_model->images( $this->data['images'] );
				// Save into the cache for 24h
				$this->cache->save('images_'.$permalink, $imgs[$permalink], 86400);
			}
			
			$this->data['images'] = $imgs[$permalink];
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
				$this->data['stage_content'] = '<img class="full-width image async-img" data-src="'.base_url(TRUE).'media/'.$this->data['images'][$items[$permalink]['stage']['image']]['filename'].'.'.$this->data['images'][$items[$permalink]['stage']['image']]['ext'].'" alt="'.$items[$permalink]['title'].'" />';
			}
			else
			{
				$this->data['stage_content'] = '<img class="centered image async-img" data-src="'.base_url(TRUE).'media/'.$this->data['images'][$items[$permalink]['stage']['image']]['filename'].'.'.$this->data['images'][$items[$permalink]['stage']['image']]['ext'].'" alt="'.$items[$permalink]['title'].'" />';
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