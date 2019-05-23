<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
Class PaymentModel extends Model 
{
    protected $table = 'payment';

    protected $fillable = ['paid_at','status','parcel_model_id','value'];
    
    public $timestamps = true;
    

}