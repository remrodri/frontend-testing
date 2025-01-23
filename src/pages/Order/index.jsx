import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import OrderTable from '../../components/Order/OrderTable';
import OrderCreateDialog from '../../components/Order/OrderCreateDialog';
import { data as ordersData } from '../../utils/order';
import { data as products } from '../../utils/product';
import AddIcon from '@mui/icons-material/Add';
import OrderTableContainer from '../../components/Order/OrderTable';

const Order = () => {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState(ordersData);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setSelectedOrder(null);
    setOpen(false);
  };

  const handleFormSubmit = (newOrderData) => {
    const selectedProduct = products.find((product) => product.id === parseInt(newOrderData.productId));

    const newOrder = {
      id: orders.length + 1,
      ...newOrderData,
      product: selectedProduct,
    };
    setOrders([...orders, newOrder]);
  };

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    handleOpen();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: { xs: '3.5rem 0 0 0', sm: '4rem 0 0 0' },
        height: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Box
        sx={{
          height: '4rem',
          pl: '1rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' sx={{ height: '100%', display: 'flex', alignItems: 'flex-end', width: '11rem' }}>
          Pedidos
        </Typography>
        <Button
          onClick={handleOpen}
          variant='contained'
          startIcon={<AddIcon />}
          sx={{
            height: '70%',
            width: '12rem',
          }}
        >
          nuevo pedido
        </Button>
        {open && (
          <OrderCreateDialog
            open={open}
            handleClose={handleClose}
            // handleSubmit={handleFormSubmit}
            // selectedOrder={selectedOrder}
          />
        )}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <OrderTableContainer
          // data={orders}
          // handleSelectOrder={handleSelectOrder}
          handleOpen={handleOpen}
          open={open}
          handleClose={handleClose}
        />
      </Box>
      {/* <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Create New Order
        </Button>
        {open && (
          <OrderCreateDialog
            open={open}
            handleClose={handleClose}
            handleSubmit={handleFormSubmit}
            selectedOrder={selectedOrder}
          />
        )}
      </Box> */}
    </Box>
  );
};

export default Order;
