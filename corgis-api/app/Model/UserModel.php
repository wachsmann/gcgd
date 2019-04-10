<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
Class UserModel extends Model 
{
    protected $table = 'user';

	protected $fillable = ['id','email','name','password','phone',];
}