<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Flight::query();

        // Apply filters if present in the request
        if ($request->has('departureLocation')) {
            $query->where('departure_location', $request->input('departureLocation'));
        }

        if ($request->has('destinationLocation')) {
            $query->where('destination_location', $request->input('destinationLocation'));
        }

        if ($request->has('flightDate')) {
            $query->where('flight_date', $request->input('flightDate'));
        }

        if ($request->has('flightType')) {
            $query->where('flight_type', $request->input('flightType'));
        }

        $flights = $query->get(['id', 'airline', 'departure_location', 'destination_location', 'flight_date', 'flight_type', 'departure_time', 'flight_number', 'ticket_price', 'taxes_fees', 'additional_fee']);
        return response()->json($flights);
    }

    public function showDetail($id)
    {
        $flight = Flight::findOrFail($id);
        return response()->json($flight);
    }

    public function getDepartureLocations()
    {
        $departureLocations = Flight::select('departure_location')->distinct()->pluck('departure_location');
        return response()->json($departureLocations);
    }

    public function getDestinationLocations()
    {
        $destinationLocations = Flight::select('destination_location')->distinct()->pluck('destination_location');
        return response()->json($destinationLocations);
    }
}
