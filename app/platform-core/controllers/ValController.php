<?php namespace Psimone\PlatformCore\Controllers;

use Psimone\PlatformCore\Controllers\BaseController;
use Psimone\PlatformCore\Facades\Form;
use Psimone\PlatformCore\Facades\Table;
use Psimone\PlatformCore\Interfaces\Module;
use Psimone\PlatformCore\Models\Reference;

class ValController extends BaseController implements Module
{
	public function delete($id)
	{
		return $this->doDelete($id);
	}

	public function form($id = null)
	{
                $references = new Reference;
                
		Form::fields(array(
		    'label' => array('type' => 'text'),
                    'references' => array(
                        'type' => 'multi',
                        'fieldWidth' => 6,
                        'entries' => Form::modelToList($references->entries(), 'field')
                    )
		));

		return $this->showForm($id);
	}

	public function listing()
	{
		Table::fields(array(
		    'label' => array()
		));

		return $this->doListing();
	}

	public function store($id = null)
	{
		Form::rules(array());

		return $this->doStore($id);
	}

}
