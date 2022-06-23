<?php

namespace App\Http\Resources\Equipment;

use Illuminate\Http\Resources\Json\JsonResource;

class EquipmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'equipment_types_id' => $this->equipment_types_id,
            'serial_number' => $this->serial_number,
            'note' => $this->note,

        ];
    }
}
