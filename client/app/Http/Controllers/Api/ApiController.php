<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\MessageController;
use App\Models\Dialog;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Throwable;


class ApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getDialogs()
    {
        $user = auth("api")->user();
        $dialogs = Dialog::with(array('user' => function ($query) {
            $query->select('id', 'name');
        }))->get();
        $dialogs = $dialogs->map(function ($item) use ($user) {

            $lastMessage = $item->lastMessages()->first();
            if ($lastMessage)
                $item->last_message = [
                    "user_id" => $lastMessage->user_id,
                    "author" => $lastMessage->user->name,
                    "content" => $lastMessage->text,
                    "date" => $lastMessage->unix,
                ];
            return $item;
        });
        return response()->json($dialogs);
    }
    public function addNew()
    {
        $dialogs = Dialog::all();
        return response()->json($dialogs);
    }
    public function sendMessage(Request $request)
    {
        $user = auth("api")->user();
        $message = $request->input("message");
        $dialogId = $request->input("dialogId");
        try {
            self::saveMessage($dialogId, $message, $user);
            return response()->json(["success" => true]);
        } catch (Throwable $e) {
            return response()->json(["success" => false]);
        };
    }
    public static function saveMessage($dialogId, $message, $sender)
    {
        $dialog = Dialog::find($dialogId);
        $lastTransaction = MessageController::getLastTransaztionId($dialog);
        $newMessage = new Message();
        $newMessage->dialog_id = $dialog->id;
        $newMessage->user_id = $sender->id;
        $newMessage->text = $message['content'];
        $newMessage->unix =  $message["date"];
        $newMessage->transaction_id = $lastTransaction + 1;
        $newMessage->save();
    }
    public function getDialogsMessage(Request $request)
    {
        $user = auth("api")->user();
        $dialog = $request->input("dialog_id");
        $dialog = Dialog::find($dialog);
        $messages = $dialog->messages()->get();
        $messages = $messages->map(function ($item) use ($user) {
            $name = $item->user()->first()->name;
            return [
                "user_id" => $item->user_id,
                "author" => $name,
                "content" => $item->text,
                "date" => $item->unix,
            ];
        });
        return response()->json($messages);
    }
}
