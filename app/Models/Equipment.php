<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Equipment extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = false;
    protected $table = 'equipment';

    public function equipmentTypes () {
        return $this->belongsTo(EquipmentType::class, 'equipment_types_id', 'id');
    }
}
