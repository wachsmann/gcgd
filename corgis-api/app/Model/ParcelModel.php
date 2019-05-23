<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
Class ParcelModel extends Model 
{
    protected $table = 'parcel';

    protected $fillable = ['status','value','expense_model_id','user_model_id','validity'];
    
    public $timestamps = true;
    

}