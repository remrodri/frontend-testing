import { useEffect, useState } from 'react';
import { useOrderContext } from '../../../context/OrderContext';
import { useProductContext } from '../../../context/ProductContext';
import OrderTable from './OrderTable';

const OrderTableContainer = ({ handleOpen }) => {
  const { products } = useProductContext();
  const { orders } = useOrderContext();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);

  const getProductName = (productId) => {
    const product = products.find((product) => product.id === productId);
    return product ? product.name : 'Desconocido';
  };

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOrder(null);
  };

  return (
    <OrderTable
      // data={data}
      orders={orders}
      // products={products}
      handleSelectOrder={handleSelectOrder}
      getProductName={getProductName}
      // handleOpen={handleOpen}
      open={open}
      handleClose={handleClose}
      selectedOrder={selectedOrder}
    />
  );
};

export default OrderTableContainer;
