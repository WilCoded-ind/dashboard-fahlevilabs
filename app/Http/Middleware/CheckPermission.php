<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckPermission
{
    public function handle(Request $request, Closure $next, string $permissionField = 'can_view'): Response {
        $user = $request->user();

        if (!$user) {
            return redirect('/not-found');
        }

        // ambil path saat ini
        $currentPath = '/' . $request->path();

        // cari menu berdasarkan url
        $menu = Menu::where('url', $currentPath)->first();

        // kalau menu tidak ditemukan maka, lewati
        if (!$menu) {
            return $next ($request);
        }

        // cek permission user berdasarkan role
        $role = $user->role;

        if (!$role) {
            return redirect('/not-found');
        }

        $permission = $role->permissions()
            ->where('menu_id', $menu->id)
            ->first();
 
        if (!$permission || !$permission->{$permissionField}) {
            return redirect('/not-found');
        }

        return $next($request);
    }
}
