<?php namespace Psimone\PlatformCore\Controllers;

use Psimone\PlatformCore\Controllers\BaseController;
use Psimone\PlatformCore\Facades\Form;
use Psimone\PlatformCore\Facades\Table;
use Psimone\PlatformCore\Interfaces\Module;
use Psimone\PlatformCore\Models\Val;

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
