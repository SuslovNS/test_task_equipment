<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use Illuminate\Http\Request;

class DeleteEquipmentController extends Controller
{
    public function __invoke(Equipment $equipment)
    {
        $equipment->delete();
        return response([]);
    }
}
