import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  number:Yup.number().required('Un numero es requerido'),
  name: Yup.string().required('El nombre es requerido'),
  price: Yup.number().required('El precio es requerido'),
});
