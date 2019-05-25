<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
Class ExpenseModel extends Model 
{
    protected $table = 'expense';

    protected $fillable = ['name','description','total','validity','collective_model_id','expense_type_model_id','user_model_id'];
    
    public $timestamps = true;
}