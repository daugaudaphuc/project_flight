<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class FlightsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create('vi_VN');

        $airlines = ["Vietnam Airlines", "Vietjet Air", "Jetstar Pacific", "Bamboo Airways"];
        $departureLocations = ["Hà Nội", "Hải Phòng", "Đà Nẵng", "Quảng Trị"];
        $currentYear = now()->year;

        foreach (range(1, 20) as $index) {
            $randomDay = rand(1, 28); // Adjust this based on the month
            $randomMonth = rand(1, 12);
            $flightDate = \Carbon\Carbon::createFromDate($currentYear, $randomMonth, $randomDay);

            DB::table('flights')->insert([
                'airline' => $faker->randomElement($airlines),
                'departure_location' => $faker->randomElement($departureLocations),
                'destination_location' => $faker->city,
                'flight_date' => $flightDate,
                'flight_type' => $faker->randomElement(['Hạng nhất', 'Hạng thương gia', 'Hạng phổ thông đặc biệt', 'Hạng phổ thông']),
                'departure_time' => $faker->time,
                'flight_number' => $faker->unique()->regexify('[A-Z0-9]{6}'),
                'ticket_price' => $faker->numberBetween(1000000, 5000000),
                'taxes_fees' => $faker->numberBetween(100000, 200000),
                'additional_fee' => $faker->numberBetween(100000, 200000),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
