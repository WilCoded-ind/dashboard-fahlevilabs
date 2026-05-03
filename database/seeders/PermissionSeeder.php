<?php

namespace Database\Seeders;

use App\Models\Menu;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $adminRoleId = Role::query()->where('name', 'Admin')->value('id');

        if ($adminRoleId === null) {
            return;
        }

        $menuIds = Menu::query()->pluck('id');

        foreach ($menuIds as $menuId) {
            Permission::query()->updateOrCreate(
                ['role_id' => $adminRoleId, 'menu_id' => $menuId],
                [
                    'can_view' => true,
                    'can_create' => true,
                    'can_update' => true,
                    'can_delete' => true,
                ],
            );
        }
    }
}
