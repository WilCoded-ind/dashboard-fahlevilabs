<?php

namespace App\Services\Contracts;

use App\Models\Menu;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface MenuServiceInterface
{
    // ambil semua data menu
    public function getAll(array $params): LengthAwarePaginator;

    // ambil data menu untuk sidebar berdasarkan role id
    public function getForSidebar(int $roleId): Collection;

    // ambil data menu berdasarkan id
    public function findById(int $id): Menu;

    // buat data menu baru
    public function create(array $data): Menu;

    // update data menu yang sudah ada
    public function update(Menu $menu, array $data): Menu;

    // hapus data menu
    public function delete(Menu $menu): void;

    // menagmbil data children
    public function getAllWithChildren(): Collection;

}
