<?php

use Psimone\PlatformCore\Classes\RepositoryInterface;

class BaseModel {

    private $source;

    public function __construct(RepositoryInterface $source)
    {
        $this->source = $source;

        $this->source->setTable($this->table);
    }

    public function __call($name, $arguments)
    {
        return call_user_func_array(array($this->source, $name), $arguments);
    }

}
