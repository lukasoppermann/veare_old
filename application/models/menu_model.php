<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Menu_model extends Fs_base_model {

	var $primary_table = 'client_menu';
	
	var $load_database = FALSE;

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
	}
	
	function main_menu()
	{
		// load navigation
		$this->load->add_package_path(BASEPATH.'packages/fs_navigation/');
		$this->load->library('fs_navigation');
		//
		return $this->fs_navigation->tree(array(
       'menu'               => 1, 
			 'language'						=> '1',
       'id'                 => 'nav',
       'item_class'         => 'item activatable',
       'link_class'         => 'ajax-link',
       'item_data'          => 'data-connect="navigation"',
       'active_lang'       => FALSE,
       'item_before'       => '<span class="veare-sprite"></span><span class="text">',
       'item_after'        => '</span>'
     ));
	}
	
// close menu model
}