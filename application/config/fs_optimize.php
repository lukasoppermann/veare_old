<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
|--------------------------------------------------------------------------
| FS Optimize
|--------------------------------------------------------------------------
|
| HTML Compression
*/
$config['compression']['html'] = array(
	'compression' => TRUE,
	'gzip' => TRUE,
	'expire' => 3600
);

// CSS Compression
$config['compression']['css'] = array(
	'compression' => TRUE,
	'gzip' => TRUE,
	'expire' => 3600
);

// JS Compression
$config['compression']['js'] = array(
	'compression' => TRUE,
	'gzip' => TRUE,
	'expire' => 3600,
	'minify' => TRUE
);
/* End of file fs_optimize.php */
/* Location: ./application/config/fs_optimize.php */