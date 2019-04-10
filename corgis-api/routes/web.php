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
$router->get('/user', ['uses' =>'UserController@index']);
$router->post('/user/create', ['uses' =>'UserController@create']);
$router->get('/user/{id}', ['uses' =>'UserController@show']);
$router->put('/user/{id}', ['uses' =>'UserController@update']);
$router->put('/public/user/login', ['uses' =>'UserController@login']);
$router->delete('/user/{id}', ['uses' =>'UserController@destroy']);
});

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/key', function() {
    return str_random(32);
});