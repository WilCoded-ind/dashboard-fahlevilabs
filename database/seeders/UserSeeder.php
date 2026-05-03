<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roleIds = Role::query()->pluck('id')->all();
        $adminRoleId = Role::query()->where('name', 'Admin')->value('id');

        $users = [
            'Wildan Ahmad',
            'Budi Santoso',
            'Siti Aminah',
            'Agus Pratama',
            'Dewi Lestari',
            'Eko Saputra',
            'Fitri Handayani',
            'Galih Ramadhan',
            'Hani Maulida',
            'Indra Gunawan',
            'Joko Susilo',
            'Kartika Sari',
            'Lukman Hakim',
            'Maya Putri',
            'Nanda Permata',
            'Oki Setiawan',
            'Putri Maharani',
            'Qori Anisa',
            'Rizky Kurniawan',
            'Teguh Wibowo',
            'Yuni Astuti',
        ];

        foreach ($users as $index => $fullName) {
            $firstName = strtolower(strtok($fullName, ' '));
            $email = $firstName . '@gmail.com';
            $existingRoleId = User::query()
                ->where('email', $email)
                ->value('roles_id');

            User::query()->updateOrCreate(
                ['email' => $email],
                [
                    'name' => $fullName,
                    'username' => $firstName,
                    'password' => bcrypt('123456'),
                    'roles_id' => $fullName === 'Wildan Ahmad'
                        ? $adminRoleId
                        : ($existingRoleId ?? fake()->randomElement($roleIds)),
                    'is_active' => $index < 10,
                ],
            );
        }
    }
}
