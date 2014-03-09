<?php namespace Psimone\PlatformCore\Models;

use Psimone\PlatformCore\Models\BaseModel;

class Test extends BaseModel {

	protected $table = 'tests';

	protected $order = array('text', 'desc');

}
