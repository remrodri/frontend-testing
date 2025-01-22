import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import OrderTable from '../../components/OrderTable';
import OrderCreateDialog from '../../components/OrderCreateDialog';
import { data as ordersData } from '../../utils/order';
import { data as products } from '../../utils/product';

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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <OrderTable data={orders} handleSelectOrder={handleSelectOrder} />
      <Box
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
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Create New Product
        </Button>
      </Box>
    </Box>
  );
};

export default Order;
