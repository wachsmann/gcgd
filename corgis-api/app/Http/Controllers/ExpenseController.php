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
    public function create(Request $request){
        $expense = new ExpenseModel;
        $expense->description = $request->description;
        $expense->validity = $request->validity;
        $expense->name = $request->name;
        $expense->total = $request->total;
        $expense->user_model_id = $request->user;
        
        $expense->expense_type_model_id =$request->expense_type["value"];
        $expense->collective_model_id = $request->collective["value"];
        //$expense->parcels = $request->parcels;
        $expense->save();
        return response()->json(); 
    }
    public function getAll(Request $request){
        
        $expenses = ExpenseModel::
            where("cu.user_model_id",$request->user)
            ->leftJoin("collective_user as cu","expense.collective_model_id","=","cu.collective_model_id")
            ->leftJoin("user","user.id","=","cu.user_model_id")
            ->leftJoin("collective","collective.id","=","cu.collective_model_id")
            ->leftJoin("parcel","expense.id","=","parcel.expense_model_id")

            ->selectRaw("expense.id, collective.name as collective_name, expense.validity,expense.total,count(parcel.id) as parcels")
            ->groupBy("expense.id")
            ->get();
            foreach ($expenses as $key => $value) {
                //Checar se parcelas estão pagas, atrasadas ou pendentes
            }
        return response()->json($expenses);
            
    }
    public function getAllCategory()
    {
        //get user id
        $categories = ExpenseTypeModel::get();

        return response()->json($categories);
    }
}

    
