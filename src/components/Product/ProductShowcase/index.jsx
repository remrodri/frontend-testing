import { useProductContext } from '../../../context/ProductContext';
import ProductShowcase from './ProductShowcase';

const ProductShowcaseContainer = () => {
  const { products } = useProductContext();
  // console.log('products::: ', products);
  return <ProductShowcase products={ products} />;
};
export default ProductShowcaseContainer;
