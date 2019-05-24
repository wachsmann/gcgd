<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\UserModel;

Class CollectiveUserModel extends Model
{
    protected $table = 'collective_user';

    protected $fillable = ['id', 'user_model_id', 'collective_model_id'];

    public $timestamps = true;

    public function users()
    {
        return $this->belongsToMany("App\Model\UserModel", "collective_user");
    }
}