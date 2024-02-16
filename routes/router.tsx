import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SuspenseLoader from '../resources/js/components/SuspenseLoader';
import Layout from '../resources/js/layouts/Layout';

const Loader =
  <P extends object>(Component: React.ComponentType<P>) =>
  (props: P) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );

//Pages
const HomeView = Loader(lazy(() => import('../resources/js/page/PageHome')));
const MarvelView = Loader(lazy(() => import('../resources/js/page/Marvel')));
const PaypalView = Loader(lazy(() => import('../resources/js/page/Paypal')));
const WeatherView = Loader(lazy(() => import('../resources/js/page/Weather')));
const PaypalSuccessView = Loader(lazy(() => import('../resources/js/page/PaypalSuccess')));
const PaypalCancelView = Loader(lazy(() => import('../resources/js/page/PaypalCancel')));

const routes = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <HomeView />,
        },
        {
            path: 'marvel',
            element: <MarvelView />,
        },
        {
            path: 'paypal',
            element: <PaypalView />,
        },
        {
            path: 'weather',
            element: <WeatherView />,
        },
        {
            path: 'paypal/success',
            element: <PaypalSuccessView />,
        },
        {
            path: 'paypal/cancel',
            element: <PaypalCancelView />,
        },
    ]
  }
]);

export default routes;
