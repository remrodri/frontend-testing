import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

const NewProductDialog = ({ open, handleClose, formik }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Product</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: '0.5rem',
            width: '15rem',
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <TextField
              sx={{ height: '70px' }}
              size='small'
              fullWidth
              id='number'
              label='Numero'
              variant='outlined'
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <TextField
              sx={{ height: '70px' }}
              size='small'
              fullWidth
              id='name'
              label='Nombre'
              variant='outlined'
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              sx={{ height: '70px' }}
              size='small'
              fullWidth
              id='price'
              label='Precio'
              variant='outlined'
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button color='success' variant='contained' type='submit'>
                Registrar
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
export default NewProductDialog;
