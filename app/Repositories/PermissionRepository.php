<?php

namespace App\Repositories;

use App\Models\Permission;
use Illuminate\Database\Eloquent\Collection;
use App\Repositories\Contracts\PermissionRepositoryInterface;

class PermissionRepository implements PermissionRepositoryInterface
{
    // method - ambil data permission berdasarkan role id
    public function getByRoleId (int $roleId): Collection
    {
        return Permission::with('menu')->where('role_id', $roleId)->get();
    }

    // method - update permission berdasarkan role id
    public function updateByRoleId(int $roleId, array $data): void
    {
        foreach ($data as $menuId => $permissions) {
            Permission::updateOrCreate(
                ['role_id' => $roleId, 'menu_id' => $menuId],
                $permissions
            );
        }
    }
}
