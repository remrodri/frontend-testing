import * as Yup from 'yup';

export const orderSchema = Yup.object().shape({
  productId: Yup.number().required('Elije un producto'),
  units: Yup.number().required('Escribe una cantidad'),
  bonus: Yup.number().required('Escribe una cantidad'),
  promo: Yup.number().required('Escribe una cantidad'),
});
