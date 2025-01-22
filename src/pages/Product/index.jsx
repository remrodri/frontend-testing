import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import ProductCreateDialog from '../../components/Product/ProductCreateDialog';
import ProductShowcaseContainer from '../../components/Product/ProductShowcase';

const Product = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        // flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
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
          Productos
        </Typography>
        <Button
          onClick={handleOpen}
          variant='contained'
          startIcon={<AddIcon />}
          sx={{
            height: '70%',
          }}
        >
          NUEVO
        </Button>
        {open && <ProductCreateDialog open={open} handleClose={handleClose} />}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: '1rem',
        }}
      >
        <ProductShowcaseContainer />
      </Box>
    </Box>
  );
};
export default Product;
