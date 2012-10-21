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
		// load optimize
		$this->load->add_package_path(BASEPATH.'packages/fs_optimize/');
		$this->load->driver('Fs_optimize');
		
		$this->load->add_package_path(BASEPATH.'packages/fs_debug/');
		$this->load->library('fs_debug');
		//
		// --------------------------------------------------------------------	
		// load assets
		// development !!!!!!!!
		js_add('jquery');
		//////////////
		$this->init( variable($_POST['ajax']) );
	}
	// --------------------------------------------------------------------
	/**
	 * init
	 *
	 * fn for initial load
	 *
	 * @access	public
	 * @param		boolean
	 * @return 
	 */
	function init( $ajax = null )
	{
		// check if initial load
		if( !isset($ajax) || $ajax == null )
		{
			// load authentication
			// $this->load->add_package_path(BASEPATH.'packages/fs_authentication/');
			// $this->load->library('fs_authentication');
			// load navigation
			$this->load->add_package_path(BASEPATH.'packages/fs_navigation/');
			$this->load->library('fs_navigation');
			// load google
			$this->load->add_package_path(BASEPATH.'packages/fs_google/');
			$this->load->library('fs_google');
			// load helpers
			$this->load->helpers(array('fs_metadata'));
			// --------------------------------------------------------------------
			// add css & js files
			css_add(array('reset','base','layout','icons','responsiveness','menu', 'gui'));
			js_add('fs.media_queries, fs.resize, fs.load, fs.loading, base', 'default');
			js_add_lines("CI_BASE = '".base_url()."';", 'default');
			// --------------------------------------------------------------------
			// Initialize Menus
			$this->data['menu']['main'] = $this->fs_navigation->tree(array(
				'menu' 							=> 1, 
				'id' 								=> 'nav',
				'item_class' 				=> 'item',
				'link_class' 				=> 'ajax-link',
				'active_unset' 			=> array(1),
				'item_before' 			=> '<span class="icon"></span><span class="text">',
				'item_after' 				=> '</span>'
			));
		}
	}
	// --------------------------------------------------------------------
	/**
	 * view
	 *
	 * load view into html or as ajax
	 *
	 * @access	public
	 * @param		boolean
	 * @return 
	 */
	function view( $template = null, $data = null, $namespace = null )
	{
		// if ajax request
		if( isset($_POST['ajax']) )
		{
			echo json_encode(array(
				'content' => $this->load->view($template, $data, TRUE),
				'namespace' => $namespace,
				'css' 		=> css_link('page', TRUE, ','),
				'js' 			=> js_link('page', FALSE, ',')
			));
		}
		// normal loading
		else
		{
			// load view
			$data['namespace'] = $namespace;
			view($template, $data);
		}
	}
// close class
}
/* End of file MY_Controller.php */
/* Location: ./application/core/MY_Controller.php */