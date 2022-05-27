<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'password' => bcrypt('password'),
            'avatar' => asset('admin/img/default-user.png')
        ]);

        User::create([
            'name' => 'Developer',
            'email' => 'developer@mail.com',
            'password' => bcrypt('password'),
            'avatar' => asset('admin/img/default-user.png')
        ]);
    }
}
