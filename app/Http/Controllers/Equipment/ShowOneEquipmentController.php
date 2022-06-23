<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Equipment\EquipmentResource;
use App\Models\Equipment;
use Illuminate\Http\Request;

class ShowOneEquipmentController extends Controller
{
    public function __invoke(Equipment $equipment)
    {
        return new EquipmentResource($equipment);
    }
}
