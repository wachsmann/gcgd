<?php

namespace App\Http\Controllers;

use App\Model\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index(Request $request)
    {
     $where = array();
     if(isset($request->name)){
      array_push($where,array('name', 'like', '%'.$request->name.'%'));
     }
      
     $users = UserModel::limit(5)->where($where)->orderBy("name")->get();     

     return response()->json($users);

    }

     public function login(Request $request)
     {
        
        $user =  
        UserModel::where('email',$request->input('email'))
        ->where('password',md5($request->input('password')))->select('id','name','token','email','phone')->first();
        
        if(count($user) > 0){
            return response()->json(array('token'=>$user->token,'user'=>array('id'=>$user->id,'name'=>$user->name,'email'=>$user->email,'phone'=>$user->phone)));
        }else{
            return response()->json($user);
        }
     }

     public function create(Request $request)
     {
          
        $user = new UserModel;

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password =  md5($request->input('password'));
        $user->phone = $request->input('phone');
        $user->token = Crypt::encrypt($user->password);
       $user->save();

       return response()->json($user);
     }

     public function show($id)
     {
        $user = UserModel::find($id);

        return response()->json($user);
     }

     public function update(Request $request, $id)
     { 
        $user= UserModel::find($id);
        
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = md5($request->input('password'));
        $user->phone = $request->input('phone');
        $user->save();
        return response()->json();
     }

     public function destroy($id)
     {
        $user = UserModel::find($id);
        $user->delete();

         return response()->json('Usuário removido com sucesso');
     }


    }

    
