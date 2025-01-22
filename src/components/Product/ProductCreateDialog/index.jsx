import { useFormik } from 'formik';
import NewProductDialog from './NewProductDialog';
import { productSchema } from './validation/productSchema';
import { useProductContext } from '../../../context/ProductContext';

const ProductCreateDialog = ({ open, handleClose }) => {
  const { createProduct } = useProductContext();

  const onSubmit = async (productData) => {
    // console.log('productData::: ', productData);
    try {
      const response = await createProduct(productData);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };
  const formik = useFormik({
    initialValues: {
      number: '',
      name: '',
      price: '',
    },
    validationSchema: productSchema,
    onSubmit,
  });
  return <NewProductDialog open={open} handleClose={handleClose} formik={formik} />;
};
export default ProductCreateDialog;
