<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Equipment\EquipmentTypeResource;
use App\Models\EquipmentType;
use Illuminate\Http\Request;

class SearchEquipmentTypeController extends Controller
{
    public function __invoke($data)
    {
        $data = EquipmentType::where('name', 'LIKE', '%'.$data.'%')->get();
        return EquipmentTypeResource::collection($data);
    }
}
