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
    $router->get('/private/collective', ['uses' =>'CollectiveController@getAll']);
    $router->post('/group/create', ['uses' =>'CollectiveController@create']);

    /**
     *  EXPENSE
     */
    $router->post('/expense/create', ['uses' =>'ExpenseController@create']);

    /**
     *  PARCEL
     */

    $router->post('/parcel/create', ['uses' =>'ParcelController@create']);

    /**
     * PAYMENT
     */

    $router->post('/payment/create', ['uses' =>'PaymentController@create']);
    $router->post('/payment/setStatus', ['uses' =>'PaymentController@setStatus']);
    $router->delete('/group/{id}', ['uses' =>'CollectiveController@destroy']);
    $router->get('/group/{id}', ['uses' =>'CollectiveController@getById']);
    /*
     * Expense
     */
    $router->get('/expense/getAllCategory', ['uses' =>'ExpenseController@getAllCategory']);
});

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->get('/teste',['uses' =>'CollectiveController@index']);
$router->get('/key', function() {
    return str_random(32);
});