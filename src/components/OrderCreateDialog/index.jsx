import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { data as products } from '../../utils/product';

const OrderCreateDialog = ({ open, handleClose, handleSubmit, selectedOrder = null }) => {
  const [productId, setProductId] = useState(selectedOrder?.productId || '');
  const [units, setUnits] = useState(selectedOrder?.units || '');
  const [unitBonus, setUnitBonus] = useState(selectedOrder?.unitBonus || '');
  const [promo, setPromo] = useState(selectedOrder?.promo || '');
  const [totalPrice, setTotalPrice] = useState(selectedOrder?.totalPrice || '');

  const handleFormSubmit = () => {
    handleSubmit({ productId, units, bonus, promo, totalPrice });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Order</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <FormControl fullWidth variant='outlined'>
            <InputLabel>Product</InputLabel>
            <Select label='Product' name='productId' value={productId} onChange={(e) => setProductId(e.target.value)}>
              {products.map((product) => (
                <MenuItem key={product.id} value={product.id}>
                  {product.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label='Units'
            name='units'
            type='number'
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            fullWidth
            variant='outlined'
          />
          <TextField
            label='Bonus'
            name='bonus'
            type='number'
            value={unitBonus}
            onChange={(e) => setUnitBonus(e.target.value)}
            fullWidth
            variant='outlined'
          />
          <TextField
            label='Promo'
            name='promo'
            type='number'
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            fullWidth
            variant='outlined'
          />
          <TextField
            label='Total Price'
            name='totalPrice'
            type='number'
            disabled
            value={totalPrice}
            fullWidth
            variant='outlined'
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary'>
          Cancel
        </Button>
        <Button onClick={handleFormSubmit} color='primary'>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderCreateDialog;
