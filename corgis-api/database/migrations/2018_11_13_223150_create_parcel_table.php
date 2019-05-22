<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParcelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parcel', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('status');
            $table->dateTime('validity');
            $table->double('value',8,2);
            $table->integer('expense_model_id')->unsigned()->nullable();
            $table->integer('user_model_id')->unsigned()->nullable();
            $table->timestamps();
        });
        Schema::table('parcel', function($table) {
            $table->foreign('expense_model_id')->references('id')->on('expense');
            $table->foreign('user_model_id')->references('id')->on('user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parcel');
    }
}
