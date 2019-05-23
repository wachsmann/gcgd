<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
Class ExpenseTypeModel extends Model 
{
    protected $table = 'expense_type';

    protected $fillable = ['name','description'];
    
    public $timestamps = true;
    

}