<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UIController;

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

// ✅ Route for Promp.ly UI
Route::get('/', [UIController::class, 'index'])->name('home');

// ✅ Authentication Routes
Auth::routes();

// ✅ Dashboard Route (If Needed)
Route::get('/dashboard', [HomeController::class, 'index'])->middleware(['auth'])->name('dashboard');

// ✅ Catch-All Route for Frontend (If Using Vue/React)
Route::get('{any}', [UIController::class, 'index'])->where('any', '.*');
