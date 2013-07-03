<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
|--------------------------------------------------------------------------
| FS Optimize
|--------------------------------------------------------------------------
|
| HTML Compression
*/
$config['html'] = array(
	'compression' => TRUE,
	'gzip' => TRUE,
	'expire' => 3600
);

// CSS Compression
$config['css'] = array(
	'compression' => TRUE,
	'gzip' => TRUE,
	'expire' => 3600
);

// JS Compression
$config['js'] = array(
	'compression' => TRUE,
	'gzip' => TRUE,
	'expire' => 3600,
	'minify' => TRUE
);
/* End of file fs_optimize.php */
/* Location: ./application/config/fs_optimize.php */