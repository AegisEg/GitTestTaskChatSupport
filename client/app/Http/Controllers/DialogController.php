<?php

namespace App\Http\Controllers;

use App\Models\Dialog;
use App\Models\User;
use Illuminate\Http\Request;

class DialogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    static function getOrCreateDialog(User $user)
    {
        $dialog = $user->dialog()->first();
        if (!$dialog) {

            $dialog = new Dialog();
            $dialog->user_id = $user->id;
            $dialog->save();
        }
        return $dialog;
    }
}
