<?php

use App\Http\Controllers\MenuController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//  default route mengarah ke dashboard
Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('dashboard'))->name('dashboard');

    Route::middleware(['checkPermission'])->group(function () {
        // roles
        Route::resource('roles', RoleController::class)->except(['show']);
        Route::get('roles/{role}/permission', [RoleController::class. 'permission'])->name('roles.permission');
        Route::put('roles/{role}/permission', [RoleController::class. 'updatePermission'])->name('roles.updatePermission');

        // menu
        Route::resource('menus', MenuController::class)->except(['show']);

        // user
        Route::resource('users', UserController::class);

    });
});

require __DIR__.'/auth.php';
require __DIR__.'/settings.php';