<?php

namespace App\Http\Controllers;

use App\Http\Requests\Menu\StoreMenuRequest;
use App\Http\Requests\Menu\UpdateMenueRequest;
use App\Models\Menu;
use App\Services\Contracts\MenuServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

class MenuController extends Controller
{
    public function __construct(
        protected MenuServiceInterface $menuService,
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('menus/index', [
            // 'menus' => $this->menuService->getAll(request()->all()),
            'menus' => $this->menuService->getAllWtihChildren(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('menus/create', [
            'parent' => $this->menuService->getAll([]),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMenuRequest $request)
    {
        $this->menuService->create($request->validated());

        return redirect()->route('menus.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu): Response
    {
        return Inertia::render('menus/edit', [
            'menu'      => $menu,
            'parent'    => $this->menuService->getAll([]),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenueRequest $request, Menu $menu)
    {
        $this->menuService->update($menu, $request->validated());

        return redirect()->route('menus.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        $this->menuService->delete($menu);

        return redirect()->route('menus.index');
    }
}
