<?php namespace Spescina\PlatformCore\Models;

use Spescina\PlatformCore\Models\BaseModel;

class Reference extends BaseModel {

	protected $table = 'references';

	protected $order = array('field', 'asc');
        
        public function vals()
        {
                return array('Val', 'reference_val', 'reference_id', 'val_id');
        }

}
