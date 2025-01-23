import { ThemeProvider } from '@emotion/react';
import Order from './pages/Order';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { ProductProvider } from './context/ProductContext';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <OrderProvider>
      <ProductProvider>
        <CssBaseline />
        <RouterProvider router={AppRouter} />
      </ProductProvider>
    </OrderProvider>
  );
}

export default App;
