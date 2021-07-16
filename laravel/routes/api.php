<?php

use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\AppAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AppAuthController::class, 'login']);
    Route::get('me', [AppAuthController::class, 'me']);
});
Route::group([
    'prefix' => 'dialog'
], function () {
    Route::get('getAll', [ApiController::class, 'getDialogs']);
    Route::get('messages', [ApiController::class, 'getDialogsMessage']);
    Route::post('sendMessage', [ApiController::class, 'sendMessage']);
});