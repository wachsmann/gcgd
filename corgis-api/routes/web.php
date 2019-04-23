<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix'=>'api/v1'], function() use($router){
/*
*  USER
*/
    $router->get('/public/user', ['uses' =>'UserController@index']);
    $router->post('/user/create', ['uses' =>'UserController@create']);
    $router->get('/user/{id}', ['uses' =>'UserController@show']);
    $router->put('/user/{id}', ['uses' =>'UserController@update']);
    $router->put('/public/user/login', ['uses' =>'UserController@login']);
    $router->delete('/user/{id}', ['uses' =>'UserController@destroy']);
    /*
    *  GROUP
    */
    $router->get('/group', ['uses' =>'GroupController@index']);
    $router->post('/group/create', ['uses' =>'GroupController@create']);
    

    

});

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/key', function() {
    return str_random(32);
});