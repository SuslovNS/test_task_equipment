<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Equipment\StoreEquipmentTypeRequest;
use App\Models\Equipment;
use App\Models\EquipmentType;
use Illuminate\Http\Request;

class StoreEquipmentTypeController extends Controller
{
    public function __invoke(StoreEquipmentTypeRequest $request)
    {
        $data = $request->validated();
        $type = EquipmentType::create($data);
        return response([]);

    }
}
