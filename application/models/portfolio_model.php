<?php
class Portfolio_model extends Fs_base_model {

	var $primary_table = 'users';

	var $fields = array();

	var $required_fields = array();

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
	}
		
	function items()
	{
		$data = db_select( 'client_entries', array('type' => 2, 'status' => 1), array('order' => 'position ASC', 'json' => 'data') );
		// sort items by position
		$data = index_array($data, 'position');
		foreach( $data as $key => $values )
		{
			if( $key != 'noindex' )
			{
				$items[$key] = $values;
			}
		}
		if( isset($data['noindex']) && is_array($data['noindex']) )
		{
			$items = array_merge($items, $data['noindex']); 
		}
		
		return $items;
		
	}
	
	function images( $images )
	{
		return db_select('files', array('status' => 1, 'id' => array($images)), array('json' => 'data', 'index' => 'id', 'index_single' => true) );
	}
	
	
}