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
    
    public static $rules = [
        'name' => 'required|alpha_num|max:100',
        'phone' => 'digits_between:8,11|numeric',
        'email' => 'required|email|unique:user,email',
        'password' => 'required',
    ];
    
}