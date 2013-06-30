<?php
class Portfolio_model extends fs_base_model {

  var $primary_table = 'users';

  var $validate_field_existence = FALSE;

  var $fields = array(
      'id',
      'text',
      'title',
			'type'
  );

  var $required_fields = array(
      'text',
      'title'
  );

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
}