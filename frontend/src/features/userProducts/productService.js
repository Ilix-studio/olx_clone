import axios from "axios";

const API_URL = "/api/products/";

//create product
const createProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, productData, config);
  return response.data;
};
const getProducts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, config);
  return response.data;
};
const deleteProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, productData, config);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  deleteProduct,
};

export default productService;
