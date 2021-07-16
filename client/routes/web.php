<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::group(['middleware' => 'auth'], function () {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index']);
    Route::get('/wait-messages', [App\Http\Controllers\MessageController::class, 'wait']);
    Route::post('/send-message', [App\Http\Controllers\MessageController::class, 'sendMessage']);
});
