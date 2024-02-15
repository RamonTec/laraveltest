<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class MarvelController extends Controller
{
    public function getComics(Request $request)
    {
        $publicKey = env('VITE_PUBLIC_KEY_MARVEL');
        $privateKey = env('VITE_PRIVATE_KEY_MARVEL');
        $baseUrl = env('VITE_BASE_URL_MARVEL') . '/comics';

        // Get page number from the request, default to 1
        $page = $request->input('page', 1);

        // Determine the limit based on your desired pagination (10 or 5)
        $limit = $request->input('pagination_size', 10);

        // Calculate offset based on page number
        $offset = ($page - 1) * $limit;
        $comicType = $request->input('comicType');

        $timestamp = time();
        $hash = md5($timestamp . $privateKey . $publicKey);

        $client = new Client();

        try {
            $queryParameters = [
                'apikey' => $publicKey,
                'ts' => $timestamp,
                'hash' => $hash,
                'limit' => $limit,
                'offset' => $offset,
            ];

            // Add comic type parameter if it is provided
            if ($comicType !== null) {
                $queryParameters['format'] = $comicType;
            }

            $response = $client->get($baseUrl, [
                'query' => $queryParameters,
            ]);

            $data = json_decode($response->getBody(), true);

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getCharacters(Request $request)
    {
        $publicKey = env('VITE_PUBLIC_KEY_MARVEL');
        $privateKey = env('VITE_PRIVATE_KEY_MARVEL');
        $baseUrl = env('VITE_BASE_URL_MARVEL') . '/characters';

        $timestamp = time();
        $hash = md5($timestamp . $privateKey . $publicKey);

        // Get page number from the request, default to 1
        $page = $request->input('page', 1);

        $limit = 10;
        $offset = ($page - 1) * $limit;

        $client = new Client();

        try {
            $response = $client->get($baseUrl, [
                'query' => [
                    'apikey' => $publicKey,
                    'ts' => $timestamp,
                    'hash' => $hash,
                    'limit' => $limit,
                    'offset' => $offset,
                ],
            ]);
            $data = json_decode($response->getBody(), true);

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
