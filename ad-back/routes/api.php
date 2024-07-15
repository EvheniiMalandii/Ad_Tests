<?php

use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdController;

Route::prefix('ads')
    ->controller(AdController::class)
    ->group(function (Router $r): void {
        $r->get('/', 'index');
        $r->get('/statistics', 'statistics');
    });
