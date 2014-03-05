<?php namespace Psimone\PlatformCore\Controllers;

use Psimone\PlatformCore\Interfaces\Module;
use Psimone\PlatformCore\Controllers\BaseController;
use Psimone\PlatformCore\Facades\Form;
use Psimone\PlatformCore\Facades\Table;

class TestController extends BaseController implements Module
{

	public function delete($id)
	{
		$this->doDelete($id);
	}

	public function form($id = null)
	{
		Form::fields(array(
			'field1' => array('type' => 'text'),
			'field2' => array('type' => 'textarea'),
			'field3' => array('type' => 'textarea')
		));
		
		Form::panel('test');
		
		return $this->showForm($id);
	}

	public function listing()
	{
		Table::columns(array(
			'field1' => array(),
			'field2' => array(),
			'field3' => array()
		));

		return $this->doListing();
	}

	public function store($id = null)
	{
		$this->doStore($id);
	}
}
