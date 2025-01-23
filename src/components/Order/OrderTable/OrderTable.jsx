import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import NewOrderDialogContainer from '../OrderCreateDialog';

const OrderTable = ({ orders, getProductName, handleSelectOrder, handleClose, open, selectedOrder }) => {
  // console.log('orders::: ', orders);
  // console.log('products::: ', products);
  return (
    <Box sx={{ width: '100%', maxWidth: '1200px' }}>
      {/* <Typography variant='h4' align='center' gutterBottom>
        Pedidos
      </Typography> */}
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Product</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Units</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Bonus</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Promo</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Total Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{`${order.productId} - ${getProductName(order.productId)}`}</TableCell>
                <TableCell>{order.units}</TableCell>
                <TableCell>{order.bonus}</TableCell>
                <TableCell>{order.promo}</TableCell>
                <TableCell>{order.totalPrice}</TableCell>
                <TableCell>
                  {/* <IconButton onClick={() => handleSelectOrder(item)}> */}
                  <IconButton onClick={()=>{handleSelectOrder(order)}}>
                    <EditIcon />
                  </IconButton>
                  {/* {open && <NewOrderDialogContainer open={open} handleClose={handleClose} orderId={order.id} />} */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedOrder && (
        <NewOrderDialogContainer open={open} handleClose={handleClose} order={selectedOrder} />
      )}
    </Box>
  );
};

export default OrderTable;
