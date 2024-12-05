<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $users = User::paginate(2);
        return Inertia::render("Users/UserIndex", ['users'=> $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user): Response
    {
        return Inertia::render('Users/UserShow', ['user'=> $user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user): Response
    {
        return Inertia::render('Users/UserEdit', ['user'=> $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $request->validate(
            [
              'name' => 'required|string|max:255',
              'email' => 'required|string|email|max:255|unique:users',
            ],
            [
              'name.required' => 'O campo nome é obrigatório',
              'name.string' => 'O nome deve ser uma string válida',
              'name.max' => 'O nome não pode ter mais de 255 caracteres',
              'email.required' => 'O campo e-mail é obrigatório',
              'email.string' => 'O e-mail deve ser uma string válida',
              'email.email' => 'O e-mail deve ser um endereço e-mail válido',
              'email.max' => 'O e-mail não pode ter mais de 255 caracteres',
              'email.unique' => 'Esse e-mail já está cadastrado',
            ]
          );

          $user->update([
            'name'=> $request->name,
            'email'=> $request->email,
          ]);

          return Redirect::route('users.index', ['user'=> $user])->with('success', 'Usuário atualizado com sucesso');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return Redirect::route('users.index', ['user' => $user])->with('success','Usuário deletado com sucesso');
    }
}
