<?php

namespace App\Http\Requests\Equipment;

use App\Models\EquipmentType;
use App\Rules\SerialNumber;
use Illuminate\Foundation\Http\FormRequest;

class StoreEquipmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
//        $val = 'equipment_types_id';
//        $mask = EquipmentType::where('id', $val)->first();
//        $maskstr = $mask->mask;
//        $arrmask = preg_split('//', $maskstr, -1, PREG_SPLIT_NO_EMPTY);
//        $translate = [
//            'N'=>'[0-9]',
//            'A'=>'[A-Z]',
//            'a'=>'[a-z]',
//            'X'=>'[0-9A-Z]',
//            'Z'=>'[-@_]',
//        ];
//        foreach ($arrmask as $k => $v){
//            $arrmask[$k] = $translate[$v] ?? $v;
//        }
//        array_push($arrmask, '/');
//        array_unshift($arrmask, '/');
//        $newmaskstr = implode($arrmask);
//        return [
//            'equipment_types_id' => 'required|integer',
//            'serial_number' => ['required', "regex:$newmaskstr"],
//            'note' => 'required|string',
//        ];
    }
}
