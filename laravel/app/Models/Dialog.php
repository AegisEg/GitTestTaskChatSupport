<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dialog extends Model
{
    function messages()
    {
        return $this->hasMany(Message::class, "dialog_id", "id");
    }
    function lastMessages()
    {
        return $this->hasOne(Message::class, "dialog_id", "id")->orderBy('transaction_id',"desc")->latest();
    }
    function user()
    {
        return $this->belongsTo(User::class, "user_id", "id");
    }
}
