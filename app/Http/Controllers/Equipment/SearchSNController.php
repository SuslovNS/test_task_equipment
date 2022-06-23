<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Equipment\EquipmentResource;
use App\Models\Equipment;
use Illuminate\Http\Request;

class SearchSNController extends Controller
{
    public function __invoke($data)
    {
        $data = Equipment::where('serial_number', 'LIKE', '%'.$data.'%')->get();
        return EquipmentResource::collection($data);
    }
}
