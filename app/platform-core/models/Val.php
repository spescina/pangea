<?php namespace Psimone\PlatformCore\Models;

use Psimone\PlatformCore\Models\BaseModel;

class Val extends BaseModel {

	protected $table = 'vals';

	protected $order = array('label', 'asc');
        
        public function references()
        {
                return array('Reference', 'reference_val', 'val_id', 'reference_id');
        }

}