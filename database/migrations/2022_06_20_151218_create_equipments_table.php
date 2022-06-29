<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipment', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('equipment_types_id')->nullable();
            $table->string('serial_number')->unique();
            $table->text('note');
            $table->index('equipment_types_id', 'equipment_equipment_types_idx');
            $table->foreign('equipment_types_id', 'equipment_equipment_types_fk')->on('equipment_types')->references('id');
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
        Schema::dropIfExists('equipment');
    }
};
