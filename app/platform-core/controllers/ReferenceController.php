<?php namespace Spescina\PlatformCore\Controllers;

use Spescina\PlatformCore\Controllers\BaseController;
use Spescina\PlatformCore\Facades\Form;
use Spescina\PlatformCore\Facades\Table;
use Spescina\PlatformCore\Interfaces\Module;
use Spescina\PlatformCore\Models\Val;

class ReferenceController extends BaseController implements Module
{
	public function delete($id)
	{
		return $this->doDelete($id);
	}

	public function form($id = null)
	{
                $val = new Val;
                
		Form::fields(array(
		    'field' => array('type' => 'text'),
                    'vals' => array(
                        'type' => 'multi',
                        'fieldWidth' => 6,
                        'entries' => Form::modelToList($val->entries(), 'label')
                    )
		));

		return $this->showForm($id);
	}

	public function listing()
	{
		Table::fields(array(
		    'field' => array()
		));

		return $this->doListing();
	}

	public function store($id = null)
	{
		Form::rules(array());

		return $this->doStore($id);
	}

}
