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
                'id' => 2,
                'name' => 'AegaAdmin',
                'email' => 'neostar19962@mail.ru',
                'online' => 0,
                'password' => '$2y$10$e326FUnELvzU.2NSUD49Q.vQxrJrf8LG1nHVBxuTnh7bd172PYczm',
                'created_at' => '2021-07-10 21:48:57',
                'updated_at' => '2021-07-10 21:48:57',
            ),
            1 => 
            array (
                'id' => 4,
                'name' => 'Admin3',
                'email' => 'adsad@mail.ru',
                'online' => 0,
                'password' => '$2y$10$mZ.8Gs3d4Gj9uxl8S4xBY.8S5c4PP62hbeyoW06.BthG84OWrk5i6',
                'created_at' => '2021-07-16 08:27:17',
                'updated_at' => '2021-07-16 08:27:17',
            ),
        ));
        
        
    }
}