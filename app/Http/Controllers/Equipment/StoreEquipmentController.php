<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Equipment\StoreEquipmentRequest;
use App\Models\Equipment;
use App\Models\EquipmentType;
use Illuminate\Http\Request;

class StoreEquipmentController extends Controller
{
    public function __invoke(StoreEquipmentRequest $request)
    {
        $data = $request->validated();
        $equipment = Equipment::create($data);
        return response([]);
    }
}
