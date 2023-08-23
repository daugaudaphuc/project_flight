<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('airline');
            $table->string('departure_location');
            $table->string('destination_location');
            $table->date('flight_date');
            $table->string('flight_type');
            $table->time('departure_time');
            $table->string('flight_number');
            $table->integer('ticket_price'); 
            $table->integer('taxes_fees'); 
            $table->integer('additional_fee'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flights');
    }
}
