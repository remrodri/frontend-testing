import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const NewOrderDialog = ({ open, handleClose, formik, products, isEditing }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Order</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: '0.5rem',
            width: '17rem',
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              fullWidth
              variant='outlined'
              size='small'
              sx={{ height: '70px' }}
              error={formik.touched.productId && Boolean(formik.errors.productId)}
            >
              <InputLabel>Producto</InputLabel>
              <Select label='Producto' name='productId' value={formik.values.productId} onChange={formik.handleChange}>
                {products.map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.productId && formik.errors.productId && (
                <FormHelperText>{formik.errors.productId}</FormHelperText>
              )}
            </FormControl>
            <TextField
              sx={{ height: '70px' }}
              size='small'
              fullWidth
              id='units'
              label='unidades'
              variant='outlined'
              type='number'
              value={formik.values.units}
              error={formik.touched.units && Boolean(formik.errors.units)}
              helperText={formik.touched.units && formik.errors.units}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ height: '70px' }}
              size='small'
              fullWidth
              id='bonus'
              label='bonos'
              variant='outlined'
              type='number'
              value={formik.values.bonus}
              onChange={formik.handleChange}
              error={formik.touched.bonus && Boolean(formik.errors.bonus)}
              helperText={formik.touched.bonus && formik.errors.bonus}
            />
            <TextField
              sx={{ height: '70px' }}
              size='small'
              fullWidth
              id='promo'
              label='promociones'
              variant='outlined'
              type='number'
              value={formik.values.promo}
              onChange={formik.handleChange}
              error={formik.touched.promo && Boolean(formik.errors.promo)}
              helperText={formik.touched.promo && formik.errors.promo}
            />
            {/* {['units', 'bonus', 'promo'].map((field) => (
              <TextField
                key={field}
                sx={{ height: '70px' }}
                size='small'
                fullWidth
                id={field}
                label={field === 'units' ? 'Unidades' : field === 'bonus' ? 'Bonos' : 'Promociones'}
                variant='outlined'
                type='number'
                value={formik.values[field]}
                onChange={(e) => formik.setFieldValue(field, Number(e.target.value))}
                error={formik.touched[field] && Boolean(formik.errors[field])}
                helperText={formik.touched[field] && formik.errors[field]}
                // inputProps={{ min: 0 }} // Evita valores negativos
              />
            ))} */}
            <TextField
              sx={{ height: '70px' }}
              size='small'
              fullWidth
              id='totalPrice'
              label='Precio Total'
              variant='outlined'
              type='number'
              value={formik.values.totalPrice}
              onChange={formik.handleChange}
              disabled
            />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button color='success' variant='contained' type='submit'>
                {isEditing ? 'Actualizar' : 'Registrar'}
              </Button>
              <Button color='error' variant='contained' onClick={handleClose}>
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NewOrderDialog;
