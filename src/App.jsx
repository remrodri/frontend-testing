import { ThemeProvider } from '@emotion/react';
import Order from './pages/Order';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <CssBaseline />
      <RouterProvider router={AppRouter} />
    </ProductProvider>
  );
}

export default App;
