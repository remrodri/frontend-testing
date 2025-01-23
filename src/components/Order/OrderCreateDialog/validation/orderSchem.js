import * as Yup from 'yup';

export const orderSchema = (initialValues = { units: Infinity, bonus: Infinity, promo: Infinity }) =>
  Yup.object().shape({
    productId: Yup.number().required('Elije un producto'),
    units: Yup.number()
      .required('Escribe una cantidad')
      .max(initialValues.units || Infinity, `No puedes agregar más de ${initialValues.units} unidades`),
    bonus: Yup.number()
      .required('Escribe una cantidad')
      .max(initialValues.bonus || Infinity, `No puedes agregar más de ${initialValues.bonus} bonos`),
    promo: Yup.number()
      .required('Escribe una cantidad')
      .max(initialValues.promo || Infinity, `No puedes agregar más de ${initialValues.promo} promos`),
  });
