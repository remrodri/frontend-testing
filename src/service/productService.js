import axiosInstance from '../config/axiosConfig';

export const createProductRequest = async (productData) => {
  // console.log('productData::: ', productData);
  try {
    const reponse = await axiosInstance.post('/products', productData);
    console.log('reponse::: ', reponse);
    return reponse.data.data;
  } catch (error) {
    console.error('Error creando el producto', error);
    throw error;
  }
};

export const getAllProductsRequest = async () => {
  try {
    const response = await axiosInstance.get('/products');
    console.log('response::: ', response);
    return response.data.data;
  } catch (error) {
    console.error('Error obteniendo los productos', error);
    throw error;
  }
};
