<?php
namespace App\Model;
use Illuminate\Database\Eloquent\Model;
Class GroupModel extends Model 
{
    protected $table = 'collective';

    protected $fillable = ['id'];
    
	public $timestamps = true;
}