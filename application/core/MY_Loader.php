<?php if (! defined('BASEPATH')) exit('No direct script access');
/**
 * CodeIgniter MY_Loader Libraries
 *
 * @package		CodeIgniter
 * @subpackage	Libraries
 * @category	Loader
 * @author		Lukas Oppermann - veare.net
 * @link		http://doc.formandsystem.com/core/loader
**/
class MY_Loader extends CI_Loader {
	
	//php 5 constructor
	function __construct() 
 	{
		parent::__construct();
	}
	// --------------------------------------------------------------------
	/**
	* Database Loader
	*
	* @access    public
	* @param    string    the DB credentials
	* @param    bool    whether to return the DB object
	* @param    bool    whether to enable active record (this allows us to override the config setting)
	* @return    object
	*/
	function database($params = '', $return = FALSE, $active_record = NULL)
	{
		// Grab the super object
		$CI =& get_instance();
		// Do we even need to load the database class?
		if (class_exists('CI_DB') AND $return == FALSE AND $active_record == NULL AND isset($CI->db) AND is_object($CI->db)) {
			return FALSE;
		}
		// Override DB class
		if( file_exists(APPPATH.'core/DB'.EXT) )
		{
			require_once(APPPATH.'core/DB'.EXT);
		}
		else
		{
			require_once(BASEPATH.'database/DB'.EXT);
		}
		// Load the DB class
		$db =& DB($params, $active_record);
		// extend drivers
		$my_driver = config_item('subclass_prefix').'DB_'.$db->dbdriver.'_driver';
		$my_driver_file = APPPATH.'core/'.$my_driver.EXT;
		//
		if (file_exists($my_driver_file)) 
		{
			require_once($my_driver_file);
			$db = new $my_driver(get_object_vars($db));
		}
		//
		if ($return === TRUE) {
			return $db;
		}
		// Initialize the db variable.  Needed to prevent
		// reference errors with some configurations
		$CI->db = '';
		$CI->db = $db;
    }
	// --------------------------------------------------------------------

	/**
	 * Extended Driver
	 *
	 * Loads a driver library
	 *
	 * @param	string	the name of the class
	 * @param	mixed	the optional parameters
	 * @param	string	an optional object name
	 * @return	void
	 */
	public function driver($library = '', $params = NULL, $object_name = NULL)
	{
		// get prefix
		$prefix = config_item('subclass_prefix');
		// load driver lib and extension
		if ( ! class_exists('CI_Driver_Library') || !class_exists($prefix.'Driver_Library'))
		{
			// if not replacement Drivers lib exists load default
			if ( ! file_exists(APPPATH.'libraries/Driver.php'))
			{
				// we aren't instantiating an object here, that'll be done by the Library itself
				require BASEPATH.'libraries/Driver.php';
			}
			else
			{
				require APPPATH.'libraries/Driver.php';
			}
			
			// Driver library extending implementation.
			// If there is a Driver library extending, we call this file.
			if (file_exists(APPPATH.'libraries/' . $prefix . 'Driver.php'))
			{
				require APPPATH.'libraries/' . $prefix . 'Driver.php';
			}
		}
		// if library is not given
		if ($library == '')
		{
			return FALSE;
		}
		// We can save the loader some time since Drivers will *always* be in a subfolder,
		// and typically identically named to the library
		if ( ! strpos($library, '/'))
		{
			$library = ucfirst($library).'/'.$library;
		}
		return $this->library($library, $params, $object_name);
	}
	// --------------------------------------------------------------------
	/**
	 * Load View
	 *
	 * Extend view, to work with not existing variables
	 *
	 * @access	public
	 * @param	string
	 * @param	array
	 * @param	string		
	 * @return	string
	 */
	public function view($view, $vars = array(), $return = FALSE)
	{
		return $this->_ci_load(array('_ci_view' => $view, '_ci_vars' => $this->_ci_object_to_array($vars), '_ci_return' => $return));
	}
// end of class
}