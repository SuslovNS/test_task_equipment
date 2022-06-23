<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Equipment\UpdateEquipmentRequest;
use App\Models\Equipment;
use Illuminate\Http\Request;

class UpdateEquipmentController extends Controller
{
    public function __invoke(UpdateEquipmentRequest $request, Equipment $equipment)
    {
        $data = $request->validated();
        $equipment->update($data);
        return response([]);
    }
}
