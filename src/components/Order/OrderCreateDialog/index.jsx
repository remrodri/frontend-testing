import { useFormik } from 'formik';
import NewOrderDialog from './NewOrderDialog';
import { orderSchema } from './validation/orderSchem';
import { useProductContext } from '../../../context/ProductContext';
import { useEffect } from 'react';
import { useOrderContext } from '../../../context/OrderContext';

const NewOrderDialogContainer = ({ open, handleClose }) => {
  const { products } = useProductContext();
  const { createOrder } = useOrderContext();

  const onSubmit = async (orderData) => {
    try {
      const response = createOrder(orderData);
      handleClose();
    } catch (error) {
      console.error('Error al crear el pedido: ', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      productId: '',
      units: '',
      bonus: '',
      promo: '',
      totalPrice: '',
    },
    validationSchema: orderSchema,
    onSubmit,
  });

  useEffect(() => {
    const { productId, units, bonus, promo } = formik.values;
    if (!productId) {
      formik.setFieldValue('totalPrice', '');
      return;
    }
    const selectedProduct = products.find((p) => p.id === productId);
    const productPrice = selectedProduct ? selectedProduct.price : 0;

    const total = productPrice * ((Number(units) || 0) + (Number(bonus) || 0) + (Number(promo) || 0));
    formik.setFieldValue('totalPrice', total.toFixed(2));
  }, [formik.values.productId, formik.values.units, formik.values.bonus, formik.values.promo, products]);

  return <NewOrderDialog open={open} handleClose={handleClose} formik={formik} products={products} />;
};
export default NewOrderDialogContainer;
