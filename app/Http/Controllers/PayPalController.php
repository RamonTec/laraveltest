<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal as PayPalClient;
use Srmklive\PayPal\Services\ExpressCheckout;

class PayPalController extends Controller
{
    public function createTransaction(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();

        $response = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('paypal/success'),
                "cancel_url" => route('paypal_cancel'),
            ],
            "purchase_units" => [
                [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => $request->input('price')
                    ]
                ]
            ]
        ]);

        // Verifica si la clave 'links' está definida antes de intentar acceder
        $returnUrl = isset($response['links'][1]['href']) ? $response['links'][1]['href'] : null;
        // Verifica si la clave 'id' está definida antes de intentar acceder
        $orderId = isset($response['id']) ? $response['id'] : null;

        // Resto del código...

        return response()->json(['order_id' => $orderId, 'return_url' => $returnUrl]);
    }

    public function handlePaymentSuccess(Request $request)
    {
        // Accede a los parámetros proporcionados por PayPal
        $token = $request->input('token');
        $payerId = $request->input('PayerID');

        // Lógica para manejar el éxito del pago
        // Por ejemplo, puedes actualizar el estado del pedido en tu base de datos
        // o mostrar un mensaje de éxito al usuario
        // También puedes realizar consultas a la API de PayPal para obtener más detalles del pago si es necesario

        return view('paypal/success'); // Puedes redirigir a una vista de éxito o realizar otras acciones según tus necesidades
    }

    public function handlePaymentCancel(Request $request)
    {
        // Accede a los parámetros proporcionados por PayPal
        $token = $request->input('token');
        $payerId = $request->input('PayerID');

        // Lógica para manejar el éxito del pago
        // Por ejemplo, puedes actualizar el estado del pedido en tu base de datos
        // o mostrar un mensaje de éxito al usuario
        // También puedes realizar consultas a la API de PayPal para obtener más detalles del pago si es necesario

        return view('paypal/cancel'); // Puedes redirigir a una vista de éxito o realizar otras acciones según tus necesidades
    }
}
