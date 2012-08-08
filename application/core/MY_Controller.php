<?php if (! defined('BASEPATH')) exit('No direct script access');
/**
 * CodeIgniter MY_Controller Libraries
 *
 * @package		CodeIgniter
 * @subpackage	Libraries
 * @category	Controller
 * @author		Lukas Oppermann - veare.net
 * @link		http://doc.formandsystem.com/core/controller
 */
class MY_Controller extends CI_Controller {

	var $data	= null;
	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
		//
		// get config from db
		$this->config->set_config_from_db();
		// set charset
		Header("Content-type: text/html;charset=UTF-8");
		// set header for browser to not cache stuff
		Header("Last-Modified: ". gmdate( "D, j M Y H:i:s" ) ." GMT"); 
		Header("Expires: ". gmdate( "D, j M Y H:i:s", time() ). " GMT"); 
		Header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1 
		Header("Cache-Control: post-check=0, pre-check=0", FALSE); 
		Header("Pragma: no-cache" ); // HTTP/1.0
		// --------------------------------------------------------------------	
		// load assets
		// development !!!!!!!!
		js_add('jquery');
		//
		if( mobile() == true )
		{
			css_add(array('base','menu','responsiveness','gui'));
			js_add('https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js, jquery.mediaquery, mobile', 'default');	
		}
		else
		{
			css_add(array('base','menu','responsiveness','slogan_line','gui'));
			js_add_lines('CI_BASE="'.base_url().'en/";', 'default', TRUE);
			js_add('https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js, jquery.mediaquery, fs.resize, base', 'default');	
		}
		// --------------------------------------------------------------------
		// Initialize Menus
		$this->data['menu']['main'] = $this->fs_navigation->tree(array(
			'menu' 					=> 1, 
			'id' 					=> 'nav',
			'item_class' 			=> 'item',
			'active_unset' 			=> array(1),
			'item_before' 			=> '<span class="icon"></span><span class="text">',
			'item_after' 			=> '</span>'
		));
		// --------------------------------------------------------------------
		// page id
		$url = explode('/',trim(str_replace(active_url(), '', current_url()),'/'));
		$this->data['body_id'] = $url[0];
		if( $this->data['body_id'] == 'http:')
		{
			$this->data['body_id'] = 'blog';
		}
		// --------------------------------------------------------------------
	}
}
/* End of file MY_Controller.php */
/* Location: ./application/core/MY_Controller.php */