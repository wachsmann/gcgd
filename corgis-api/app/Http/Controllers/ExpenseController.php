<?php

namespace App\Http\Controllers;

use App\Model\CollectiveModel;
use App\Model\CollectiveUserModel;
use App\Model\ExpenseModel;
use App\Model\ParcelModel;
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
        $users = CollectiveUserModel::where("collective_model_id",$expense->collective_model_id)->get();
        $expense->save();
        
        //Making parcels for users 
        $qttUsers = count($users);
        $parcels = (int) $request->parcels["value"];
        $parcelPerMonth = (float) $expense->total/$parcels;
        $parcelsPerUser =  (float) $parcelPerMonth/ (int) $qttUsers;
        for ($i=0; $i < $parcels; $i++) { 
            foreach ($users as $user) {
                $parcel = new ParcelModel;
                $parcel->status = 0;
                $parcel->value = $parcelsPerUser;
                
                $parcel->user_model_id = $user->user_model_id;
                $parcel->expense_model_id = $expense->id;
                $parcel->validity =  date("Y-m-d H:i:s");
                $parcel->save();
            }

        }
           
        
        
        
       
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
                $parcels = ParcelModel::where("expense_model_id",$value->id)->get();
                
                $paid = true;
                
                foreach ($parcels as $parcel) {
                    if($parcel->status == 0){
                       $paid = false;
                       break;
                    }
                        
                }
                
                $value->status = $paid ? "Pago" : "Pendente";
            }
        return response()->json($expenses);
            
    }
    public function pay(Request $request){
        try {
            
            $expense = ExpenseModel::find($request->id);
        
            $parcels = ParcelModel::where("expense_model_id",$expense->id)->get();
            
            foreach ($parcels as $parcel) {
                $parcel->status = 1;
                $parcel->save();
            }
        
            return response()->json();
    
        } catch (Exception $ex) {
            return response(500)->json();
        }
      
    }
    public function getAllCategory()
    {
        //get user id
        $categories = ExpenseTypeModel::get();

        return response()->json($categories);
    }
}

    
