<?php namespace Psimone\PlatformCore\Modules;

use Psimone\PlatformCore\Modules\ModuleInterface;
use Psimone\PlatformCore\Modules\BaseController;
use Psimone\PlatformCore\Facades\Form;
use Psimone\PlatformCore\Facades\Table;

class TestController extends BaseController implements ModuleInterface
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
		
		$this->showForm($id);
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
