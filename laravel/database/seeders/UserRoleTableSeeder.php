<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserRoleTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('user_role')->delete();
        
        \DB::table('user_role')->insert(array (
            0 => 
            array (
                'id' => 3,
                'user_id' => 2,
                'role_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 5,
                'user_id' => 4,
                'role_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}