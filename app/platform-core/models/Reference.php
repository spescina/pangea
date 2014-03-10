<?php namespace Psimone\PlatformCore\Models;

use Psimone\PlatformCore\Models\BaseModel;

class Reference extends BaseModel {

	protected $table = 'references';

	protected $order = array('field', 'asc');

}
