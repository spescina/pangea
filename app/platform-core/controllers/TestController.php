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
		    'field2' => array('type' => 'password'),
		    'field3' => array('type' => 'date'),
		    'field4' => array('type' => 'datetime'),
		    'field5' => array('type' => 'time'),
		));

		Form::panel('textarea');
		Form::activePanel('textarea');

		Form::fields(array(
		    'field6' => array('type' => 'textarea', 'fieldWidth' => 9),
		    'field7' => array('type' => 'rich', 'fieldWidth' => 9)
		));

		Form::panel('dropdowns');
		Form::activePanel('dropdowns');

		Form::fields(array(
		    'field8' => array('type' => 'dropdown', 'entries' => array(
			1 => 'A',
			2 => 'B',
			3 => 'C',
		    )),
		    'field9' => array('type' => 'multidropdown', 'entries' => array(
			1 => 'A',
			2 => 'B',
			3 => 'C',
		    ))
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
		Form::rules(array());

		return $this->doStore($id);
	}

}
