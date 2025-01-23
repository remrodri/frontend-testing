import axiosInstance from '../config/axiosConfig';

export const createOrderRequest = async (orderData) => {
  console.log('orderData::: ', orderData);
  try {
    const response = await axiosInstance.post('/orders', orderData);
    console.log('response::: ', response);
    return response.data.data;
  } catch (error) {
    console.error('Error la crear el pedido', error);
    throw error;
  }
};

export const getAllOrders = async () => {
  try {
    const response = await axiosInstance.get('/orders');
    console.log('response::: ', response);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener los pedidos', error);
    throw error;
  }
};
