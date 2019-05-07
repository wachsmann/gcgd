<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
Class GroupUserModel extends Model 
{
    protected $table = 'collective_user';

    protected $fillable = ['user_id','collective_id'];
    
    public $timestamps = true;
    
    public function groupable()
    {
        return $this->morphTo();
    }
}