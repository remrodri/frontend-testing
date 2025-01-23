import { createContext, useContext, useEffect, useState } from 'react';
import { createOrderRequest, getAllOrders } from '../service/orderService';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const createOrder = async (orderData) => {
    try {
      const response = await createOrderRequest(orderData);
      if (!response) {
        throw new Error('Failed to create order');
      }
      setOrders([...orders, response]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const orderList = await getAllOrders();
      setOrders(orderList);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return <OrderContext.Provider value={{ orders, createOrder }}>{children}</OrderContext.Provider>;
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderContext must be used within a OrderProvider');
  }
  return context;
};
