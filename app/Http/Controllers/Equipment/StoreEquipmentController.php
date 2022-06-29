<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Equipment\StoreEquipmentRequest;
use App\Models\Equipment;
use App\Models\EquipmentType;
use Illuminate\Http\Request;

class StoreEquipmentController extends Controller
{
    public function __invoke(Request $request)
    {
        $val = $request->equipment_types_id;
        $mask = EquipmentType::where('id', $val)->first();
        $maskstr = $mask->mask;
        $arrmask = preg_split('//', $maskstr, -1, PREG_SPLIT_NO_EMPTY);
        $translate = [
            'N'=>'[0-9]',
            'A'=>'[A-Z]',
            'a'=>'[a-z]',
            'X'=>'[0-9A-Z]',
            'Z'=>'[-@_]',
        ];
        foreach ($arrmask as $k => $v){
            $arrmask[$k] = $translate[$v] ?? $v;
        }
        array_push($arrmask, '/');
        array_unshift($arrmask, '/');
        $newmaskstr = implode($arrmask);
        $data = $request->validate([
            'equipment_types_id' => 'required|integer|exists:equipment_types,id',
            'serial_number' => ['unique:equipment,serial_number','required', "regex:$newmaskstr"],
            'note' => 'required|string',
        ]);
        $equipment = Equipment::create($data);
        return response([]);
    }
}
