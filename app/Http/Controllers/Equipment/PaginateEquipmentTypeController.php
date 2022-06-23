<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Equipment\EquipmentTypeResource;
use App\Models\EquipmentType;
use Illuminate\Http\Request;

class PaginateEquipmentTypeController extends Controller
{
    public function __invoke()
    {
        $equiptype = EquipmentType::paginate(3);
        return EquipmentTypeResource::collection($equiptype) ;
    }
}
