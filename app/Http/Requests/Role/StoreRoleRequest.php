<?php

namespace App\Http\Requests\Role;

use Illuminate\Foundation\Http\FormRequest;

class StoreRoleRequest extends FormRequest
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
            'name'      => ['required', 'string', 'max:255', 'unique:roles,name'],
            'initials'  => ['required', 'string', 'max:10', 'unique:roles,initials'],
        ];
    }
}