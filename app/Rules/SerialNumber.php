<?php

namespace App\Rules;

use App\Http\Requests\Equipment\StoreEquipmentRequest;
use App\Models\EquipmentType;
use Illuminate\Contracts\Validation\Rule;

class SerialNumber implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $mask = EquipmentType::where('id', 3)->first();
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
        $newmaskstr = implode($arrmask);
        if ($newmaskstr == $value){
            return true;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
