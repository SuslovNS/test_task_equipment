<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use App\Models\EquipmentType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UploadJsonController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->hasFile('file');
        $file = $request->file('file');
        $file_name = time(). '.' . $file->getClientOriginalName();
        $file->move(storage_path(), $file_name);
        $path = storage_path($file_name);
        $filedec = file_get_contents($path);
        $deck = json_decode($filedec, true);
//                $val = [$deck][0][0]['equipment_types_id'];
//                $mask = EquipmentType::where('id', $val)->first();
//                $maskstr = $mask->mask;
//                $arrmask = preg_split('//', $maskstr, -1, PREG_SPLIT_NO_EMPTY);
//                $translate = [
//                    'N'=>'[0-9]',
//                    'A'=>'[A-Z]',
//                    'a'=>'[a-z]',
//                    'X'=>'[0-9A-Z]',
//                    'Z'=>'[-@_]',
//                ];
//                foreach ($arrmask as $k => $v){
//                    $arrmask[$k] = $translate[$v] ?? $v;
//                }
//                array_push($arrmask, '/');
//                array_unshift($arrmask, '/');
//                $newmaskstr = implode($arrmask);
//        $data = Validator::make($deck, [
//            'deck' => 'array|required',
//            'deck.*.*.equipment_types_id'=> 'required',
//            'deck.*.*.serial_number' => 'required',
//            'deck.*.*.note'=> 'required|integer',
//        ]);
                $equipment = Equipment::insert($deck);
                return response([]);
    }

}
