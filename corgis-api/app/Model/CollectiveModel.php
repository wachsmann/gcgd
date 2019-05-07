<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
use App\Model\UserModel;
Class CollectiveModel extends Model 
{
    protected $table = 'collective';

    protected $fillable = ['id','name'];
    
    public $timestamps = true;
    
    public function users()
    {
        return $this->belongsToMany("App\Model\UserModel","collective_user");
    }
}