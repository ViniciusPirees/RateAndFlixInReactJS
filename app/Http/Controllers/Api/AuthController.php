<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CadastroRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use http\Env\Response;

class AuthController extends Controller
{
public function login(LoginRequest $request) //Criado o LoginRequest
{
    $credentials = $request->validated();
    
    if (!Auth::attempt($credentials)) { //Se não conseguiu autenticar:

        return response([
            'credentials' => $credentials,
            'message' => 'Email ou senha estão incorretas'
        ], 422);
    }
    /** @var App\Models\User $usuario */ //Direcionando a variável
    //Caso funcione:
    
    $usuario = Auth::user();
    
    $token = $usuario->createToken('main')->plainTextToken;
    return response([
        'usuario'=>$usuario,
        'token'=>$token
    ]);
    //return response(compact('usuario','token')); 
}

public function cadastro(CadastroRequest $request) //Criado o CadastroRequest
{ //Request será ativo qnd no Cadastro.jsx for feito o post com o axiosClient
    $data = $request->validated();
    /** @var App\Models\User $usuario  */ //Direcionando a variável
    $usuario = User::create([ //criando um usuário novo
        'name'  => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
    ]);
    
    $token = $usuario->createToken('main')->plainTextToken;

    return response([
        'usuario' => $usuario,
        'token' => $token
    ]);
}

public function logout(Request $request)
{   
    /** @var App\Models\User $usuarios  */ //Direcionando a variável
    $usuario = $request->user();
    $usuario->currentAccessToken()->delete();
    return response( '', 204);

}

}
