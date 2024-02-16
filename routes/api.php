<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MarvelController;
use App\Http\Controllers\PayPalController;
use App\Http\Controllers\WeatherController;

Route::get('/characters', [MarvelController::class, 'getCharacters']);
Route::get('/comics', [MarvelController::class, 'getComics']);

Route::get('/handle-payment-response', [PayPalController::class, 'handlePaymentResponse']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
