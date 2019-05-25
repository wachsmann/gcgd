<?php

namespace App\Http\Controllers;

use App\Model\CollectiveModel;
use App\Model\CollectiveUserModel;
use App\Model\ExpenseModel;
use App\Model\ExpenseTypeModel;
use App\Model\UserModel;
use Illuminate\Http\Request;


class ExpenseController extends Controller
{
    public function getAllCategory()
    {
        //get user id
        $categories = ExpenseTypeModel::get();

        return response()->json($categories);
    }
}

    
