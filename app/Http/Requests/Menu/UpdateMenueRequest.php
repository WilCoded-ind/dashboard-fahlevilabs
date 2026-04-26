<?php

namespace App\Http\Requests\Menu;

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
        return [
            'name'      => ['required', 'string', 'max:225', 'unique:menus,name'],
            'slug'      => ['required', 'string', 'max:255', 'unique:menus,slug'],
            'url'       => ['nullable', 'string', 'max:255', 'unique:menus,url'],
            'parent_id' => ['nullable', 'exists:menus,id'],
            'order'     => ['required', 'integer'],
            'icon'      => ['nullable', 'string', 'max:255'],
        ];
    }
}