<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->dateTime('paid_at');
            $table->integer('status');
            $table->double('value',8,2);
            $table->integer('parcel_model_id')->unsigned()->nullable();
        });
        Schema::table('payment', function($table) {
            $table->foreign('parcel_model_id')->references('id')->on('parcel');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment');
    }
}
