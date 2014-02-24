<?php

use Psimone\PlatformCore\Classes\ModuleInterface;
use Psimone\PlatformCore\Classes\RepositoryInterface;

class TestController extends Controller implements ModuleInterface {

    use \Psimone\PlatformCore\Classes\ModuleTrait;

    public function __construct(RepositoryInterface $model)
    {
        $this->model = $model;
    }

    public function getDelete($id)
    {
        $this->delete($id);
    }

    public function getEdit($id = null)
    {
        $this->edit($id);
    }

    public function getListing()
    {
        $this->listing();
    }

    public function postEdit($id = null)
    {
        $this->store($id);
    }

}
