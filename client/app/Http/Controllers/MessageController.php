<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

use Illuminate\Support\Facades\Redis;

class MessageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Get new user Messages
     *
     * @return \Illuminate\Http\Response
     */
    public function wait(Request $request)
    {
        $user = Auth::user();
        $lastTransaction = $request->query("last_id");
        $dialog = DialogController::getOrCreateDialog($user);
        $counter = 0;
        do {
            sleep(1);
            $messagesData = self::getUserMessages($user, $dialog, $lastTransaction);
            $counter++;
        } while ($messagesData["messages"]->isEmpty() && $counter < 10);
        return response()->json($messagesData);
    }
    static function sendEmit($message, $dialogId)
    {
        $redis = Redis::connection();
        $redis->publish('newMessage', json_encode([
            'dialogId' => $dialogId,
            "message" => $message
        ]));
    }
    public function sendMessage(Request $request)
    {
        $message = $request->input("message");
        $date = $request->input("date");
        try {
            $sender = Auth::user();
            self::saveMessage($sender, $message, $date);
            return response()->json(["success" => true]);
        } catch (Throwable $e) {
            return response()->json(["success" => false]);
        }
    }
    public static function saveMessage($sender, $message, $date)
    {
        $dialog = DialogController::getOrCreateDialog($sender);
        $lastTransaction = self::getLastTransaztionId($dialog);
        $newMessage = new Message();
        $newMessage->dialog_id = $dialog->id;
        $newMessage->user_id = $sender->id;
        $newMessage->text = $message;
        $newMessage->unix = $date;
        $newMessage->transaction_id = $lastTransaction + 1;
        $newMessage->save();
        $messageObj = [
            "author" => $sender->name,
            "content" => $newMessage->text,
            "date" => $newMessage->unix,
            "user_id" => $sender->id
        ];
        self::sendEmit($messageObj, $newMessage->dialog_id);
    }
    static function getLastTransaztionId($dialog)
    {
        $lastMessage = $dialog->messages()->orderBy('transaction_id', 'desc')->first();

        if ($lastMessage)
            return $lastMessage->transaction_id;
        else return 0;
    }
    static function getUserMessages($user, $dialog, $lastTransaction = false)
    {
        $messagesQuery = $dialog->messages()->orderBy('transaction_id');
        if ($lastTransaction !== false)
            $messagesQuery->where("transaction_id", ">", $lastTransaction);
        $messages = $messagesQuery->get();
        $newLastTransaction = false;
        if (!$messages->isEmpty())
            $newLastTransaction = $messages->last()->transaction_id;
        $messages = $messages->map(function ($item) use ($user) {
            if ($item->user_id != $user->id)
                $name = "Admin";
            else
                $name = $user->name;
            return [
                "user_id" => $item->user_id,
                "author" => $name,
                "content" => $item->text,
                "date" => $item->unix,
            ];
        });
        return [
            "messages" => $messages,
            "lastTransaction" => $newLastTransaction
        ];
    }
}
