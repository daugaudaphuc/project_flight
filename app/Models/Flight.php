<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;

    protected $fillable = [
        'airline',
        'departure_location',
        'destination_location',
        'flight_date',
        'flight_type',
        'departure_time',
        'flight_number',
        'ticket_price',
        'taxes_fees',
        'additional_fee'
    ];
}
