<?php

namespace App\Services;

use App\Models\Menu;
use App\Repositories\Contracts\MenuRepositoryInterface;
use App\Services\Contracts\MenuServiceInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class MenuService implements MenuServiceInterface
{
    // constructor - inject MenuRepositoryInterface
    public function __construct(
        protected MenuRepositoryInterface $menuRepository
    ) {}

    // method - ambil semua data Menu
    public function getAll(array $params): LengthAwarePaginator
    {
        return $this->menuRepository->getAll($params);
    }

    // method - ambil data Menu untuk sidebar berdasarkan role id
    public function getForSidebar(int $roleId): Collection
    {
        return $this->menuRepository->getForSidebar($roleId);
    }

    // method - ambil data Menu berdasarkan id
    public function findById(int $id): Menu
    {
        return $this->menuRepository->findById($id);
    }

    // method - buat data Menu baru
    public function create(array $data): Menu
    {
        return $this->menuRepository->create($data);
    }

    // method - update data Menu yang sudah ada
    public function update(Menu $menu, array $data): Menu
    {
        return $this->menuRepository->update($menu, $data);
    }

    // method - hapus data Menu
    public function delete(Menu $menu): void
    {
        $this->menuRepository->delete($menu);
    }

    //
    public function getAllWithChildren(): Collection
    {
        return $this->menuRepository->getAllWithChildren();
    }

}
