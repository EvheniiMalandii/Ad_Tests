<?php

namespace App\Transformers;

use App\Models\Ad;
use League\Fractal\TransformerAbstract;

class AdTransformer extends TransformerAbstract
{
    public function transform(Ad $ad)
    {
        return [
            'id' => $ad->id,
            'title' => $ad->title,
            'description' => $ad->description,
            'impressions' => $ad->impressions,
            'clicks' => $ad->clicks,
        ];
    }
}
