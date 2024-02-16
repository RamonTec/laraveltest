<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PayPalController;
use App\Http\Controllers\WeatherController;

Route::post('/create-payment', [PayPalController::class, 'createTransaction'])->name('create-payment');
Route::post('/paypal/cancel', [PayPalController::class, 'handlePaymentCancel'])->name('paypal_cancel');
Route::get('/paypal/success', [PayPalController::class, 'handlePaymentSuccess'])->name('paypal/success');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/marvel', function () {
    return view('welcome');
});

Route::get('/paypal', function () {
    return view('welcome');
});

Route::get('/paypal', function () {
    return view('welcome');
});

Route::get('/paypal/success', function () {
    return view('welcome');
});

Route::get('/paypal/cancel', function () {
    return view('welcome');
});

Route::get('/weather', function () {
    return view('welcome');
});

Route::get('/weather/{city}', [WeatherController::class, 'getWeather']);
Route::get('/clima-paises/{paises}', [WeatherController::class, 'getWeatherForCountries']);
