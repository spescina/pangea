<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('{model}/{action?}/{id?}', function($model, $action = 'listing', $id = null) {

    $className = ucfirst($model);

    $controllerName = $className . 'Controller';

    $model = App::bind($className, new $className( new Psimone\PlatformCore\Classes\FluentRepository));

    $controller = new $controllerName($model);

    return $controller->$action();
});
