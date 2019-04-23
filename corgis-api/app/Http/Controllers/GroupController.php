<?php

namespace App\Http\Controllers;

use App\Model\GroupModel;
use App\Model\UserModel;
use Illuminate\Http\Request;


class GroupController extends Controller
{
 
     public function create(Request $request)
     {
          
        $group = new GroupModel;
        dd($request->all());
        
        $group->save();

       return response()->json();
     }

    }

    
