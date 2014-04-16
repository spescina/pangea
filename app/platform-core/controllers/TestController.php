<?php namespace Spescina\PlatformCore\Controllers;

use Spescina\Mediabrowser\Browser;
use Spescina\PlatformCore\Controllers\BaseController;
use Spescina\PlatformCore\Facades\Form;
use Spescina\PlatformCore\Facades\Table;
use Spescina\PlatformCore\Interfaces\Module;
use Spescina\PlatformCore\Models\Reference;

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

		Form::panel('media');
		Form::activePanel('media');

		Form::fields(array(
		    'media' => array(
                        'type' => 'media',
                        'allowed' => Browser::TYPE_ALL
                    )
		));

		return $this->showForm($id);
	}

	public function listing()
	{
		Table::fields(array(
		    'text' => array('columnWidth' => 3),
		    'date' => array('columnWidth' => 2, 'filterable' => false),
		    'time' => array('columnWidth' => 2)
		));

		return $this->doListing();
	}

	public function store($id = null)
	{
		Form::rules(array());

		return $this->doStore($id);
	}

}
