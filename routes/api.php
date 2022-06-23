<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Equipment\ShowEquipmentTypeController;
use App\Http\Controllers\Equipment\ShowEquipmentController;
use App\Http\Controllers\Equipment\StoreEquipmentTypeController;
use App\Http\Controllers\Equipment\StoreEquipmentController;
use App\Http\Controllers\Equipment\ShowOneEquipmentController;
use App\Http\Controllers\Equipment\ShowEquipmentNameController;
use App\Http\Controllers\Equipment\UpdateEquipmentController;
use App\Http\Controllers\Equipment\DeleteEquipmentController;
use App\Http\Controllers\Equipment\PaginateEquipmentTypeController;
use App\Http\Controllers\Equipment\SearchEquipmentTypeController;
use App\Http\Controllers\Equipment\SearchSNController;
use App\Http\Controllers\Equipment\SearchNoteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => '\App\Http\Controllers\Equipment'], function () {
    Route::get('/equipment-type', ShowEquipmentTypeController::class);
    Route::get('/equipment-type/paginate', PaginateEquipmentTypeController::class);
    Route::get('/equipment', ShowEquipmentController::class);
    Route::get('/equipment/{equipment}', ShowOneEquipmentController::class);
    Route::delete('/equipment/{equipment}', DeleteEquipmentController::class);
    Route::patch('/equipment/edit/{equipment}/', UpdateEquipmentController::class);
    Route::get('/equipment/name/{equipment}', ShowEquipmentNameController::class);
    Route::post('/store/equipment-type', StoreEquipmentTypeController::class);
    Route::post('/store/equipment', StoreEquipmentController::class);
    Route::get('/equipment-type/search/{data}', SearchEquipmentTypeController::class);
    Route::get('/equipment/search/{data}', SearchSNController::class);
    Route::get('/equipment/note/search/{data}', SearchNoteController::class);

});

