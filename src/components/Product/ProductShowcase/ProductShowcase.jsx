import { Box } from '@mui/material';
import ProductCard from '../productCard';

const ProductShowcase = ({ products }) => {
  console.log('products::: ', products);
  return (
    <Box
      sx={{
        // height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        // p: '0 0 1rem 0',
        justifyContent: 'center',
      }}
    >
      {products && products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p>No hay productos registrados</p>
      )}
    </Box>
  );
};
export default ProductShowcase;
