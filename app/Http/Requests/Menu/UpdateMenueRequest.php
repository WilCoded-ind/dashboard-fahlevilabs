<?php

namespace App\Http\Requests\Menu;

use App\Models\Menu;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateMenueRequest extends FormRequest
{
    // mengizinkan semua user melakukan request
    public function authorize(): bool
    {
        return true;
    }

    // validasi data yang masuk
    public function rules(): array
    {
        /** @var Menu $menu */
        $menu = $this->route('menu');

        return [
            'name'      => ['required', 'string', 'max:225', Rule::unique('menus', 'name')->ignore($menu->id)],
            'slug'      => ['required', 'string', 'max:255', Rule::unique('menus', 'slug')->ignore($menu->id)],
            'url'       => ['nullable', 'string', 'max:255', Rule::unique('menus', 'url')->ignore($menu->id)],
            'parent_id' => [
                'nullable',
                'exists:menus,id',
                function (string $attribute, mixed $value, \Closure $fail) use ($menu) {
                    if (! $value) {
                        return;
                    }

                    if ((int) $value === $menu->id) {
                        $fail('Menu tidak bisa menjadi parent untuk dirinya sendiri.');

                        return;
                    }

                    $parent = Menu::with('parent.parent')->find($value);

                    if (! $parent) {
                        return;
                    }

                    if ($this->isDescendantOf($parent, $menu)) {
                        $fail('Parent menu tidak boleh berasal dari turunan menu ini.');

                        return;
                    }

                    if ($this->getMenuDepth($parent) >= 2) {
                        $fail('Parent menu hanya boleh sampai level 2.');
                    }
                },
            ],
            'order'     => ['required', 'integer'],
            'icon'      => ['nullable', 'string', 'max:255'],
        ];
    }

    private function getMenuDepth(Menu $menu): int
    {
        $depth = 0;
        $current = $menu->parent;

        while ($current) {
            $depth++;
            $current = $current->parent;
        }

        return $depth;
    }

    private function isDescendantOf(Menu $candidateParent, Menu $menu): bool
    {
        $current = $candidateParent;

        while ($current) {
            if ($current->id === $menu->id) {
                return true;
            }

            $current = $current->parent;
        }

        return false;
    }
}
