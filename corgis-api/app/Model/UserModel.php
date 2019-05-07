<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
use App\Model\CollectiveModel;
Class UserModel extends Model 
{
    protected $table = 'user';

    protected $fillable = ['id','email','name','password','phone',];
    public function groups()
    {
        return $this
                ->belongsToMany("App\Model\CollectiveModel","collective_user");
    }
}