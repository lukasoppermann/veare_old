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
		css_add('base,menu');
		js_add('jquery, jquery.effects.core.min, fs.gui', 'default');
		// --------------------------------------------------------------------
		// Initialize Menus
		// Main
		// foreach($this->config->item('menu') as $menu)
		// {
		// 	$this->data['menu'][$menu['name']] = $this->fs_navigation->tree(array(
		// 		'db_table' => 'client_menu',
		// 		'menu' => $menu['menu_id'], 
		// 		'id' => $menu['name'].'_menu', 
		// 		'class_lvl_0' => variable($menu['class']), 
		// 		'start_lvl' => variable($menu['start_lvl']), 
		// 		'lvl' => variable($menu['lvl']), 
		// 		'hide' => variable($menu['hide']))
		// 	);	
		// }
		// --------------------------------------------------------------------
	}
}
/* End of file MY_Controller.php */
/* Location: ./application/core/MY_Controller.php */