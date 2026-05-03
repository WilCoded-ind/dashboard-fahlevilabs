<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MenuSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $administratorMenu = Menu::query()->updateOrCreate(
            ['name' => 'Administrator'],
            [
                'slug' => Str::slug('Administrator'),
                'url' => null,
                'parent_id' => null,
                'order' => 1,
                'icon' => 'Users',
            ],
        );

        Menu::query()->updateOrCreate(
            ['name' => 'User Management'],
            [
                'slug' => Str::slug('User Management'),
                'url' => '/users',
                'parent_id' => $administratorMenu->id,
                'order' => 1,
                'icon' => 'UserCog',
            ],
        );

        Menu::query()->updateOrCreate(
            ['name' => 'Role & Permission'],
            [
                'slug' => Str::slug('Role & Permission'),
                'url' => '/roles',
                'parent_id' => $administratorMenu->id,
                'order' => 2,
                'icon' => 'ShieldCheck',
            ],
        );

        Menu::query()->updateOrCreate(
            ['name' => 'Menu Management'],
            [
                'slug' => Str::slug('Menu Management'),
                'url' => '/menus',
                'parent_id' => null,
                'order' => 2,
                'icon' => 'LayoutList',
            ],
        );
    }
}
