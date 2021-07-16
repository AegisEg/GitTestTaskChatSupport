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
                'id' => 2,
                'user_id' => 1,
                'role_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 3,
                'user_id' => 2,
                'role_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}