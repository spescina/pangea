<?php namespace Spescina\PlatformCore\Models;

use Spescina\PlatformCore\Models\BaseModel;

class Test extends BaseModel {

	protected $table = 'tests';

	protected $order = array('text', 'desc');

}
