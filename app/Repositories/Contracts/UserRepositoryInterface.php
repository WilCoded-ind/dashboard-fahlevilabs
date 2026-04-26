<?php

namespace App\Repositories\Contracts;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

interface UserRepositoryInterface
{
    // ambil semua data user
    public function getAll(): Collection;

    // ambil data user berdasarkan id
    public function findById(int $id): User;

    // buat data user baru
    public function create(array $data): User;

    // update data user yang sudah ada
    public function update(User $user, array $data): User;

    // hapus data user
    public function delete(User $user): void;
}