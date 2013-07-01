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
		// $this->load->driver('Cache');
		// load optimize
		$this->load->add_package_path(BASEPATH.'packages/fs_optimize/');
		$this->load->driver('Fs_optimize');
		//
		$this->load->add_package_path(BASEPATH.'packages/fs_debug/');
		$this->load->library('fs_debug');
		//
		$this->load->library('cache', array('adapter' => 'apc', 'backup' => 'file'));
		// $this->load->add_package_path(BASEPATH.'packages/fs_base_model/');
		// $this->load->model('fs_base_model');
		// $this->load->model('portfolio_model');

		// echo'<pre>';print_r($this->portfolio_model->update(array("where"=>array('type'=>1),"title" => "Titel" ) ));echo'</pre>';

		// echo'<pre>';print_r($this->db->last_query());echo'</pre>';
		// $get = $this->portfolio_model->get(array('id' => array('0',12)));
		// 
		// echo'<pre>';print_r($get);echo'</pre>';
		// foreach($get->result() as $g)
		// {
		// 	echo $g->title;
		// }
		//
		// --------------------------------------------------------------------	
		// load assets
		// development !!!!!!!!
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
			css_add(array('reset','base','colors','layout','animations','browser','icons','responsiveness','menu'));
			css_add(array('portfolio'));
			js_add('jsfirst, jquery, fs.centered');
			js_add('fs.media_queries, fs.resize, fs.load, fs.history, jquery.fittext.js, base, javascript', 'default'); 
			// js_add_lines("CI_BASE = '".base_url()."';var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-7074034-1']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();", 'default');
			// check for mobile
			// --------------------------------------------------------------------
			// Initialize Menus
			if ( ! $main_menu = $this->cache->get('menu'))
			{
				$main_menu = $this->fs_navigation->tree(array(
					'menu' 							=> 1, 
					'id' 								=> 'nav',
					'item_class' 				=> 'item activatable',
					'link_class' 				=> 'ajax-link',
					'item_data'					=> 'data-connect="navigation"',
					'active_lang' 			=> FALSE,
					'item_before' 			=> '<span class="veare-sprite"></span><span class="text">',
					'item_after' 				=> '</span>'
				));
				
				// Save into the cache for 24h
				$this->cache->save('menu', $main_menu, 86400);
			}
			
			$this->data['menu']['main'] = $main_menu;
			
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
		css_add_lines('#namespace_'.$namespace.'{height:1px;}','page', FALSE );
		// if ajax request
		if( isset($_POST['ajax']) )
		{
			echo json_encode(array(
				'content' 			=> $this->load->view($template, $data, TRUE),
				'namespace' 		=> $namespace,
				'css' 					=> css_link('page', TRUE, ','),
				'js' 						=> js_link('page', TRUE, ','),
				'title' 				=> variable($data['meta_title'], 'Welcome').' | vea.re – visionary design',
				'body_class'		=> variable($data['body_class'])
			));
		}
		// normal loading
		else
		{
			// set path
			$data['path'] = base_url(true).config('lang_abbr').implode('',$this->fs_navigation->active('path'));
			// check if path is wrong
			if( strstr(current_url(), $data['path']) )
			{
				$data['path'] = trim(current_url(),'/');
			}
			// load view
			$data['namespace'] = $namespace;
			view($template, $data);
		}
	}
// close class
}
/* End of file MY_Controller.php */
/* Location: ./application/core/MY_Controller.php */