<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            // Store user's name in the session
            session(['user_name' => $user->name]);

            // Generate a token for the user (handled by Laravel's default authentication)
            $token = $user->remember_token;

            return response()->json(['token' => $token, 'user' => $user->name], 200);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
