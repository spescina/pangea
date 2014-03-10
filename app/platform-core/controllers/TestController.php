<?php namespace Psimone\PlatformCore\Controllers;

use Psimone\PlatformCore\Interfaces\Module;
use Psimone\PlatformCore\Controllers\BaseController;
use Psimone\PlatformCore\Facades\Form;
use Psimone\PlatformCore\Facades\Table;
use Psimone\PlatformCore\Models\Reference;

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

		$reference = new Reference;

		Form::fields(array(
		    'reference_id' => array(
			'type' => 'dropdown',
			'entries' => Form::modelToDropdown($reference->entries(), 'field')
		    ),
		    'multidropdown' => array('type' => 'multidropdown', 'entries' => array(
			1 => 'A',
			2 => 'B',
			3 => 'C',
		    ))
		));

		Form::panel('checkradio');
		Form::activePanel('checkradio');

		Form::fields(array(
		    'checkbox' => array('type' => 'checkbox'),
		    'radiobutton' => array('type' => 'radiobutton', 'entries' => array(
			'a' => 1,
			'b' => 2,
			'c' => 3
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
