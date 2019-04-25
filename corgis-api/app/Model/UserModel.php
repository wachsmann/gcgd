<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
Class UserModel extends Model 
{
    protected $table = 'user';

    protected $fillable = ['id','email','name','password','phone',];
    
    public static $rules = [
        'name' => 'required|alpha_num|max:100',
        'phone' => 'digits_between:8,11|numeric',
        'email' => 'required|email|unique:user,email',
        'password' => 'required',
    ];
    
}