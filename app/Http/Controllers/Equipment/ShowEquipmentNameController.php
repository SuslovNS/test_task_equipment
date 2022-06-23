<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Equipment\EquipmentResource;
use App\Http\Resources\Equipment\EquipmentTypeResource;
use App\Models\Equipment;
use App\Models\EquipmentType;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowEquipmentNameController extends Controller
{
    public function __invoke(EquipmentTypeResource $equipmentname)
    {
        return new EquipmentTypeResource($equipmentname);
    }
}
