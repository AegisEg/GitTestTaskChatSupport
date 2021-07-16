<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Aega',
                'email' => 'neostar1996@mail.ru',
                'online' => 0,
                'password' => '$2y$10$syM4tUJhsFuCe0N.dFvO6uf1gktqaFEozIRHqva/wZ8F3B6MwZDfG',
                'created_at' => '2021-07-10 07:04:43',
                'updated_at' => '2021-07-10 07:04:43',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'AegaAdmin',
                'email' => 'neostar19962@mail.ru',
                'online' => 0,
                'password' => '$2y$10$e326FUnELvzU.2NSUD49Q.vQxrJrf8LG1nHVBxuTnh7bd172PYczm',
                'created_at' => '2021-07-10 21:48:57',
                'updated_at' => '2021-07-10 21:48:57',
            ),
        ));
        
        
    }
}