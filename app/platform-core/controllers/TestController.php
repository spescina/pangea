<?php namespace Psimone\PlatformCore\Controllers;

use Psimone\PlatformCore\Interfaces\Module;
use Psimone\PlatformCore\Controllers\BaseController;
use Psimone\PlatformCore\Facades\Form;
use Psimone\PlatformCore\Facades\Table;
use Psimone\PlatformCore\Models\Test;

class TestController extends BaseController implements Module
{
	public function delete($id)
	{
		return $this->doDelete($id);
	}

	public function form($id = null)
	{
		Form::fields(array(
		    'text' => array('type' => 'text'),
		    'password' => array('type' => 'password'),
		    'date' => array('type' => 'date'),
		    'datetime' => array('type' => 'datetime'),
		    'time' => array('type' => 'time'),
		));

		Form::panel('textarea');
		Form::activePanel('textarea');

		Form::fields(array(
		    'textarea' => array('type' => 'textarea', 'fieldWidth' => 9),
		    'rich' => array('type' => 'rich', 'fieldWidth' => 9)
		));

		Form::panel('dropdowns');
		Form::activePanel('dropdowns');

		$tests = Test::all();

		Form::fields(array(
		    'dropdown' => array('type' => 'dropdown', 'entries' => Form::modelToDropdown($tests, 'text')),
		    'multidropdown' => array('type' => 'multidropdown', 'entries' => array(
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
		    'text' => array(),
		    'date' => array(),
		    'time' => array()
		));

		return $this->doListing();
	}

	public function store($id = null)
	{
		Form::rules(array());

		return $this->doStore($id);
	}

}
