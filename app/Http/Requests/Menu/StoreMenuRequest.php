<?php

namespace App\Http\Requests\Menu;

use App\Models\Menu;
use Illuminate\Foundation\Http\FormRequest;

class StoreMenuRequest extends FormRequest
{
    // mengizinkan semua user melakukan request
    public function authorize(): bool
    {
        return true;
    }

    // validasi data yang masuk
    public function rules(): array
    {
        return [
            'name'      => ['required', 'string', 'max:225', 'unique:menus,name'],
            'slug'      => ['nullable', 'string', 'max:255', 'unique:menus,slug'],
            'url'       => ['nullable', 'string', 'max:255', 'unique:menus,url'],
            'parent_id' => [
                'nullable',
                'exists:menus,id',
                function (string $attribute, mixed $value, \Closure $fail) {
                    if (! $value) {
                        return;
                    }

                    $parent = Menu::with('parent.parent')->find($value);

                    if (! $parent) {
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
}
