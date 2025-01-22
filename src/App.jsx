import { ThemeProvider } from '@emotion/react';
import Order from './pages/Order';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App;
