<?php

namespace App\Repositories;

use App\Models\Menu;
use App\Repositories\Contracts\MenuRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use App\Models\Permission;

class MenuRepository implements MenuRepositoryInterface
{
    // method - ambil semua data menu
    public function getAll(array $params): LengthAwarePaginator
    {
        return Menu::with(['parent', 'children'])
            ->when($params['search'] ?? null, fn($q, $search) =>
                $q->where(function ($query) use ($search) {
                    $query->where('name', 'like', "%$search%")
                        ->orWhere('url', 'like', "%$search%")
                        ->orWhereHas('parent', fn($parent) =>
                            $parent->where('name', 'like', "%$search%"));
                })
            )
            ->orderByRaw('parent_id is not null')
            ->orderBy('parent_id')
            ->orderBy($params['sort'] ?? 'order', $params['direction'] ?? 'asc')
            ->paginate($params['per_page'] ?? 10);
    }

    // method - ambil data menu untuk sidebar berdasarkan role id
    public function getForSidebar(int $roleId): Collection
    {
        // ambil menu id yang boleh diakses berdasarkan role id
        $allowedMenuIds = Permission::where('role_id', $roleId)
            ->where('can_view', true)
            ->pluck('menu_id');

        // ambil data menu beserta children yang boleh diakses berdasarkan menu id yang sudah didapat
        return Menu::with(['children' => function($q) use ($allowedMenuIds) {
                $q->where(function($childQuery) use ($allowedMenuIds) {
                    $childQuery->whereIn('id', $allowedMenuIds)
                        ->orWhereHas('children', function($grandChildQuery) use ($allowedMenuIds) {
                            $grandChildQuery->whereIn('id', $allowedMenuIds);
                        });
                })
                ->with(['children' => function($grandChildQuery) use ($allowedMenuIds) {
                    $grandChildQuery->whereIn('id', $allowedMenuIds)->orderBy('order');
                }])
                ->orderBy('order');
            }])
            ->whereNull('parent_id')
            ->where(function($q) use ($allowedMenuIds) {
                $q->whereIn('id', $allowedMenuIds)
                  ->orWhereHas('children', function($q2) use ($allowedMenuIds) {
                      $q2->whereIn('id', $allowedMenuIds);
                  })
                  ->orWhereHas('children.children', function($q2) use ($allowedMenuIds) {
                      $q2->whereIn('id', $allowedMenuIds);
                  });
            })
            ->orderBy('order')
            ->get();
    }

    // method - ambil data menu berdasarkan id
    public function findById(int $id): Menu
    {
        return Menu::findOrFail($id);
    }

    // method - buat data menu baru
    public function create(array $data): Menu
    {
        return Menu::create($data);
    }

    // method - update data menu yang sudah ada
    public function update(Menu $menu, array $data): Menu
    {
        $menu->update($data);
        return $menu;
    }

    // method - hapus data menu
    public function delete(Menu $menu): void
    {
        $menu->delete();
    }

    public function getAllWithChildren(): Collection
    {
        return Menu::with([
            'children' => fn($q) => $q->orderBy('order'),
            'children.children' => fn($q) => $q->orderBy('order'),
        ])
        ->whereNull('parent_id')
        ->orderBy('order')
        ->get();
    }
}
