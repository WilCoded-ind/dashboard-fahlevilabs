<?php

namespace App\Repositories;

use App\Models\Role;
use App\Repositories\Contracts\RoleRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class RoleRepository implements RoleRepositoryInterface
{
    // method - ambil semua data role
    public function getAll(array $params): LengthAwarePaginator
    {
        return Role::query()
            ->withCount('users')
            ->when($params['search'] ?? null, fn($q, $search) =>
                $q->where('name', 'like', "%$search%")
                    ->orWhere('initials', 'like', "%$search%")
            )
            ->orderBy($params['sort'] ?? 'id', $params['direction'] ?? 'asc')
            ->paginate($params['per_page'] ?? 10);
    }

    // method - ambil data role berdasarkan id
    public function findById(int $id): Role
    {
        return Role::findOrFail($id);
    }

    // method - buat data role baru
    public function create(array $data): Role
    {
        return Role::create($data);
    }

    // method - update data role yang sudah ada
    public function update(Role $role, array $data): Role
    {
        $role->update($data);
        return $role;
    }

    // method - hapus data role
    public function delete(Role $role): void
    {
        $role->delete();
    }
}
