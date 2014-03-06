<?php namespace Psimone\PlatformCore\Controllers;

use Psimone\PlatformCore\Interfaces\Module;
use Psimone\PlatformCore\Controllers\BaseController;
use Psimone\PlatformCore\Facades\Form;
use Psimone\PlatformCore\Facades\Table;

class TestController extends BaseController implements Module
{
	public function delete($id)
	{
		return $this->doDelete($id);
	}

	public function form($id = null)
	{
		Form::fields(array(
		    'field1' => array('type' => 'text'),
		    'field2' => array('type' => 'textarea')
		));

		Form::panel('test');
		Form::activePanel('test');

		Form::fields(array(
		    'field3' => array('type' => 'rich', 'fieldWidth' => 9)
		));

		return $this->showForm($id);
	}

	public function listing()
	{
		Table::fields(array(
		    'field1' => array(),
		    'field2' => array(),
		    'field3' => array()
		));

		return $this->doListing();
	}

	public function store($id = null)
	{
		Form::rules(array(
		    'field1' => array('required'),
		    'field2' => array('integer')
		));

		return $this->doStore($id);
	}

}
