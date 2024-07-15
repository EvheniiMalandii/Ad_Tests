<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Transformers\AdTransformer;

class AdController extends Controller
{
    public function index()
    {
        return fractal(Ad::all(), new AdTransformer());
    }

    public function statistics()
    {
        $statistics = Ad::select(
            DB::raw('DATE(created_at) as date'),
            DB::raw('SUM(impressions) as total_impressions'),
            DB::raw('SUM(clicks) as total_clicks')
        )
            ->groupBy('date')
            ->get();

        return response()->json($statistics);
    }
}
