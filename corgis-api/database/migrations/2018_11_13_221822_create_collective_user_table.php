<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCollectiveUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collective_user', function (Blueprint $table) {
            $table->timestamps();
            $table->increments('id');
            $table->integer('user_model_id')->unsigned()->nullable();
            $table->integer('collective_model_id')->unsigned()->nullable();
            
        });
        Schema::table('collective_user', function($table) {
            $table->foreign('user_model_id')->references('id')->on('user');
            $table->foreign('collective_model_id')->references('id')->on('collective');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('collective_user');
    }
}
