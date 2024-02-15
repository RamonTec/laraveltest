<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MarvelController;

Route::get('/characters', [MarvelController::class, 'getCharacters']);
Route::get('/comics', [MarvelController::class, 'getComics']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
