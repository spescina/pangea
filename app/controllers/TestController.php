<?php

use Psimone\PlatformCore\Classes\ModuleInterface;
use Psimone\PlatformCore\Classes\RepositoryInterface;

class TestController extends Controller implements ModuleInterface {

    use \Psimone\PlatformCore\Classes\ModuleTrait;

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
