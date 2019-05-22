<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExpenseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description');
            $table->double('total',8,2);
            $table->dateTime('validity');

            $table->integer('collective_model_id')->unsigned()->nullable();
            $table->integer('expense_type_model_id')->unsigned()->nullable();
            $table->integer('user_model_id')->unsigned()->nullable();
            
            
            $table->timestamps();
        });
        Schema::table('expense', function($table) {
            $table->foreign('collective_model_id')->references('id')->on('collective');
            $table->foreign('expense_type_model_id')->references('id')->on('expense_type');
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
        Schema::dropIfExists('expense');
    }
}
