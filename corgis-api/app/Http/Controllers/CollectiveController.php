<?php

namespace App\Http\Controllers;

use App\Model\CollectiveModel;
use App\Model\CollectiveUserModel;
use App\Model\UserModel;
use Illuminate\Http\Request;


class CollectiveController extends Controller
{
    public function create(Request $request)
    {

        $collective = new CollectiveModel;
        $collective->name = $request->groupName;
        try {
            $collective->save();
            foreach ($request->usersList as $user) {

                $newUser = UserModel::find($user['value']);
                $collective->users()->save($newUser);
            }
            return response()->json();
        } catch (Exception $th) {
            return response()->json($th);
        }

    }

    public function getAll(Request $request)
    {
        //get user id
        $collectives = CollectiveModel::with("users")->orderBy("name")->get();

        return response()->json($collectives);
    }

    public function destroy($id)
    {
        CollectiveUserModel::where('collective_model_id', $id)->delete();

        $group = CollectiveModel::find($id);
        $group->delete();

        return response()->json('Grupo removido com sucesso');
    }

    public function getById($id)
    {
        $group = CollectiveModel::where('id', $id)->with("users")->first();

        return response()->json($group);
    }
}

    
