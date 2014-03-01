<?php namespace Psimone\PlatformCore\Modules;

use Psimone\PlatformCore\Modules\ModuleInterface;
use Psimone\PlatformCore\Models\BaseModel;
use Psimone\PlatformCore\Modules\BaseController;

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
		return $this->doListing();
	}

	public function store($id = null)
	{
		$this->doStore($id);
	}

}
