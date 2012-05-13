<?php if (! defined('BASEPATH')) exit('No direct script access');

class Blog extends MY_Controller {

	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
		// load assets
		css_add('widget, blog');
		js_add('blog');
		$this->load->helper('date');
	}
	
	function index()
	{	

		// columns
		$column[0] = 'left';
		$column[1] = 'right';
		//
		$i = 0;
		// get entries from database
		$post = db_select( 'client_entries', array('type' => 2), array('limit' => 50, 'order' => 'date DESC', 'json' => 'data') );
		// process entries
		foreach( $post as $entry )
		{
			// time difference
			$entry['date'] = time_ago(mysql_to_unix($entry['date']));
			// assign posts to columns
			$posts[$column[$i]][] = $this->load->view('blog/post_teaser', $entry, TRUE);
			$i = ($i == 1) ? 0 : 1;
		}
		// merge posts
		$posts['articles_left'] = implode('',$posts['left']);
		$posts['articles_right'] = implode('',$posts['right']);
		$posts = array_merge($posts, $this->data);
		// load view
		view('blog/index', $posts);

	}
	
	function entry( $permalink )
	{
		// get entries from database
		$post = db_select( 'client_entries', array('type' => 2, 'permalink' => $permalink), array('json' => 'data', 'single' => TRUE));
		// time difference
		$post['date'] = time_ago(mysql_to_unix($post['date']));
		$post = array_merge($post, $this->data);
		// load view
		view('blog/post', $post);
	}
	
}