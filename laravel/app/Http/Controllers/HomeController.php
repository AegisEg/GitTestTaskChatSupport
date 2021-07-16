<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

class HomeController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Show the chat Page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        try {
            $user = Auth::user();
            $dialog = DialogController::getOrCreateDialog($user);
            $messagesData = MessageController::getUserMessages($user, $dialog);
            $messages = $messagesData["messages"];
            $lastTransaction = $messagesData["lastTransaction"];
            return view('home', compact("messages", "user", "lastTransaction"));
        } catch (Throwable $e) {
            return abort(404);
        }
    }
}
