<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// auth mengarah ke login bukan welcome
Route::inertia('/', 'auth/login', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // route - dashboard
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    // route - user
    Route::inertia('users', 'users/index')->name('users.index');
    Route::inertia('users/create', 'users/create')->name('users.create');
    Route::inertia('users/{user}/edit', 'users/edit')->name('users.edit');
    Route::inertia('users/{user}', 'users/show')->name('users.show');

    // route - role
    Route::inertia('roles', 'roles/index')->name('roles.index');
    Route::inertia('roles/create', 'roles/create')->name('roles.create');
    Route::inertia('roles/{role}/edit', 'roles/edit')->name('roles.edit');
    Route::inertia('roles/{role}', 'roles/show')->name('roles.show');

    // route - permission
    Route::inertia('permissions', 'permissions/index')->name('permissions.index');

    // route - menu
    Route::inertia('menus', 'menus/index')->name('menus.index');
    Route::inertia('menus/create', 'menus/create')->name('menus.create');
    Route::inertia('menus/{menu}/edit', 'menus/edit')->name('menus.edit');
    Route::inertia('menus/{menu}', 'menus/show')->name('menus.show');
});

require __DIR__.'/settings.php';
