<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use App\Repositories\Contracts\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
    // method - ambil semua data user
    public function getAll(): Collection
    {
        return User::with('roles')->get();
    }

    // method - ambil data user berdasarkan id
    public function findById(int $id): User
    {
        return User::with('roles')->findOrFail($id);
    }

    // method - buat data user baru
    public function create(array $data): User
    {
        return User::create($data);
    }

    // method - update data user yang sudah ada
    public function update(User $user, array $data): User
    {
        $user->update($data);
        return $user;
    }

    // method - hapus data user
    public function delete(User $user): void
    {
        $user->delete();
    }
}