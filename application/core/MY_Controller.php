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
		// get config from db
		// $this->config->set_config_from_db();
		// set charset
		Header("Content-type: text/html;charset=UTF-8");
		// set header for browser to not cache stuff
		Header("Last-Modified: ". gmdate( "D, j M Y H:i:s" ) ." GMT"); 
		Header("Expires: ". gmdate( "D, j M Y H:i:s", time() ). " GMT"); 
		Header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1 
		Header("Cache-Control: post-check=0, pre-check=0", FALSE); 
		Header("Pragma: no-cache" ); // HTTP/1.0
		// $this->output->enable_profiler(TRUE);
		// --------------------------------------------------------------------	
		// load optimize
		$this->load->add_package_path(BASEPATH.'packages/fs_jsmin/');
		$this->load->add_package_path(BASEPATH.'packages/fs_optimize/');
		$this->load->driver('Fs_optimize');
		//
		$this->load->driver('cache', array('adapter' => 'apc', 'backup' => 'file'));
		// load model
		$this->load->add_package_path(BASEPATH.'packages/fs_base_model/');
		$this->load->model('Fs_base_model');
		// --------------------------------------------------------------------
		// load google
		$this->load->add_package_path(BASEPATH.'packages/fs_google/');
		$this->load->library('fs_google');
		// load helpers
		$this->load->helper(array('fs_metadata'));
		// --------------------------------------------------------------------
		// load assets
		css_add(array('reset','base','colors','layout','animations','browser','icons','responsiveness','menu'));
		css_add(array('portfolio'));
		js_add('jquery, fs.centered, fs.tiles');
		js_add('fs.media_queries, fs.resize, base, javascript', 'default'); 
		// --------------------------------------------------------------------
		// init menu
		if ( ! $main_menu = $this->cache->get('menu') )
		{
			// load menu model
			$this->load->model('Menu_model','', TRUE);
			
			// build menu
			$main_menu = $this->Menu_model->main_menu();
			
			// Save into the cache for 24h
			$this->cache->save('menu', $main_menu, 86400);
		}
		
		$this->data['menu']['main'] = $main_menu;
	}
	
	// small function to loads view into template
	function view( $template, $data = null )
	{
		// get page
		$data['_output'] = $this->load->view($template, $data, TRUE);
		
		// load into template
		$this->load->view('template', $data);
	}
// close class
}
/* End of file MY_Controller.php */
/* Location: ./application/core/MY_Controller.php */