import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/MainLayout';
import Order from '../pages/Order';
import Product from '../pages/Product';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Order />,
      },
      {
        path: 'products',
        element: <Product/>
      },
    ],
  },
]);
