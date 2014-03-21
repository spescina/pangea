<?php namespace Psimone\PlatformCore\Controllers;

use Psimone\PlatformCore\Interfaces\Module;
use Psimone\PlatformCore\Controllers\BaseController;
use Psimone\PlatformCore\Facades\Form;
use Psimone\PlatformCore\Facades\Table;

class ReferenceController extends BaseController implements Module
{
	public function delete($id)
	{
		return $this->doDelete($id);
	}

	public function form($id = null)
	{
		Form::fields(array(
		    'field' => array('type' => 'text')
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
