<?php

namespace App\Http\Controllers;

use App\Models\Equipment;
use App\Models\EquipmentType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestController extends Controller
{

   public function __invoke()
   {
       //$val = [$deck][0][0]['equipment_types_id'];
//       $mask = EquipmentType::where('id', $val)->first();
//       $maskstr = $mask->mask;
//       $arrmask = preg_split('//', $maskstr, -1, PREG_SPLIT_NO_EMPTY);
//       $translate = [
//         'N'=>'[0-9]',
//         'A'=>'[A-Z]',
//         'a'=>'[a-z]',
//         'X'=>'[0-9A-Z]',
//         'Z'=>'[-@_]',
//       ];
//       foreach ($arrmask as $k => $v){
//           $arrmask[$k] = $translate[$v] ?? $v;
//   }
//       array_push($arrmask, '/');
//       array_unshift($arrmask, '/');
//       $newmaskstr = implode($arrmask);
//       dd($newmaskstr);
//       $path = storage_path('test.json');
//       $filedec = file_get_contents($path);
//       $deck = json_decode($filedec, true);
//       $validator = Validator::make($deck->all(), [
//           //'deck' => 'array|required',
//           'deck.*.*.equipment_types_id'=> 'required',
//           'deck.*.*.serial_number' => 'required',
//           'deck.*.*.note'=> 'required',
//       ]);
//       $data = $validator->validated();
//       dd($data);
       //$equipment = Equipment::insert($data);
//       $data = $deck->validate([
//           'deck' => 'array|required',
//           'deck.*.equipment_types_id'=> 'required|integer',
//           'deck.*.serial_number' => 'required',
//           'deck.*.note'=> 'required',
//       ]);

       //$ids = [$deck][0][2]['serial_number']; ['equipment_types_id']
//       foreach ($deck as $key => $value) {
//           $deck[$key] = $value['serial_number'];
//       }
       //list($id, $sn) = $deck;
//       foreach ($deck as ['equipment_types_id'=> $id, 'serial_number'=> $sn]){
//
//           $deck=  preg_split('//', $id, -1, PREG_SPLIT_NO_EMPTY);
//       }


       //dd($data);
       //$equipment = Equipment::insert($deck);
   }

}
