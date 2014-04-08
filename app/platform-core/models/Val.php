<?php namespace Psimone\PlatformCore\Models;

use Psimone\PlatformCore\Models\BaseModel;

class Val extends BaseModel {

	protected $table = 'vals';

	protected $order = array('label', 'asc');

}
