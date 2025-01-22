import { createContext, useContext, useEffect, useState } from 'react';
import { createProductRequest, getAllProductsRequest } from '../service/productService';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const createProduct = async (productData) => {
    // console.log('productData::: ', productData);
    const response = await createProductRequest(productData);
    if (!response) {
      console.log('El producto no se regitro');
    }
    setProducts([...products, response]);
    console.log('response::: ', response);
  };

  const fetchProducts = async () => {
    try {
      const productList = await getAllProductsRequest();
      setProducts(productList);
      // console.log('productList::: ', productList);
    } catch (error) {
      console.log('error::: ', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{ products, createProduct }}>{children}</ProductContext.Provider>;
};
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
