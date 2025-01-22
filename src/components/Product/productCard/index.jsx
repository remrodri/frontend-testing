import { Card, CardContent, CardHeader,Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  // console.log('product::: ', product);
  return (
    <Card
      sx={{
        width: 250,
      }}
    >
      <CardHeader title={`Nombre: ${product.name}`} subheader={`Precio: ${product.price}`} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Numero: {product.number}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
