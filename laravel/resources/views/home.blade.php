@extends('layouts.app')

@section('content')
<div class="container">
    <chat-page :init-messages="{{json_encode($messages)}}" :user="{{json_encode($user)}}" :last-transaction="{{json_encode($lastTransaction)}}"></chat-page>    
</div>
@endsection
