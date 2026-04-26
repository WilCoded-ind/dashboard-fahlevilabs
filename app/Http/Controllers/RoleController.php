<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Http\Requests\Permission\UpdatePermissionRequest;
use App\Http\Requests\Role\StoreRoleRequest;
use App\Http\Requests\Role\UpdateRoleRequest;
use App\Services\Contracts\MenuServiceInterface;
use App\Services\Contracts\PermissionServiceInterface;
use App\Services\Contracts\RoleServiceInterface;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class RoleController extends Controller
{
    public function __construct(
        protected RoleServiceInterface $roleService,
        protected MenuServiceInterface $menuService,
        protected PermissionServiceInterface $permissionService,
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('roles/index', [
            'roles' => $this->roleService->getAll(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('roles/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request): RedirectResponse
    {
        $this->roleService->create($request->validated());

        return redirect()->route('roles.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role): Response
    {
        return Inertia::render('roles/edit', [
            'role' => $role,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, Role $role): RedirectResponse
    {
        $this->roleService->update($role, $request->validated());

        return redirect()->route('roles.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role): RedirectResponse
    {
        $this->roleService->delete($role);

        return redirect()->route('roles.index');
    }

    // method permission
    public function permission(Role $role): Response
    {
        return Inertia::render('roles/permission', [
            'role' => $role,
            'menus' => $this->menuService->getAll(),
            'permissions' => $this->permissionService->getByRoleId($role->id),
        ]);
    }

    // method update permission
    public function updatePermission(UpdatePermissionRequest $request, Role $role): RedirectResponse
    {
        $this->permissionService->updateByRoleId(
            $role->id,
            $request->validated()['permissions'],
        );

        return redirect()->route('roles.permissions', $role);
    }
}
