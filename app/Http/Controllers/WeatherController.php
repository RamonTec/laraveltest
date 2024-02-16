<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class WeatherController extends Controller
{
    protected $apiKey;

    public function __construct()
    {
        // Coloca tu clave de API de OpenWeatherMap aquí
        $this->apiKey = env('VITE_API_KEY_WEATHER');
    }

    public function getWeatherForCountries($paises)
    {
        $countries = explode(',', $paises); // Convierte la cadena de países en un array

        $weatherData = [];

        foreach ($countries as $country) {
            $weatherData[$country] = $this->getWeatherForCity($country);
        }

        return response()->json($weatherData);
    }

    private function getWeatherForCity($city)
    {
        $client = new Client();

        try {
            $response = $client->get("https://api.openweathermap.org/data/2.5/weather", [
                'query' => [
                    'q' => $city,
                    'appid' => $this->apiKey,
                ],
            ]);

            $data = json_decode($response->getBody(), true);

            return [
                'city' => $city,
                'current_weather' => $data['weather'][0]['description'],
                'temperature' => $data['main']['temp'],
                'humidity' => $data['main']['humidity'],
            ];
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function getWeather(Request $request, $city)
    {
        $client = new Client();

        try {
            $response = $client->get("https://api.openweathermap.org/data/2.5/weather", [
                'query' => [
                    'q' => $city,
                    'appid' => $this->apiKey,
                ],
            ]);

            $data = json_decode($response->getBody(), true);

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}
