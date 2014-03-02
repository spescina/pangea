<?php namespace Psimone\PlatformCore\Modules;

use Psimone\PlatformCore\Modules\ModuleInterface;
use Psimone\PlatformCore\Models\BaseModel;
use Psimone\PlatformCore\Modules\BaseController;
use Psimone\PlatformCore\Facades\Table;

class TestController extends BaseController implements ModuleInterface {

	public function delete($id)
	{
		$this->doDelete($id);
	}

	public function form($id = null)
	{
		$this->showForm($id);
	}

	public function listing()
	{
		/*Table::setColumns(array(
			'field' => array(),
			'field1' => array(),
			'field2' => array()
		));*/

		return $this->doListing();
	}

	public function store($id = null)
	{
		$this->doStore($id);
	}

}
