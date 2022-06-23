<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Equipment\EquipmentResource;
use App\Models\Equipment;
use App\Models\EquipmentType;
use Illuminate\Http\Request;

class ShowEquipmentController extends Controller
{
    public function __invoke()
    {
        $equipment = Equipment::paginate(3);
        return EquipmentResource::collection($equipment);
    }
}
