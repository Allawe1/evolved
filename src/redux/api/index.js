import axios from "axios";

const url = "http://localhost:5000/api/";

// product api
export const fetchProduct = () => axios.get(url + "product");

export const fetchProductByGatogery = (id) =>
  axios.get(url + `product/productGatogery/${id}`);

export const fetchProductById = (id) => axios.get(url + `product/${id}`);

// user api

export const loginUser = url + `auth/signin`;
export const register = (email, password, username) => axios.post(url + `user`);
export const updateUser = url + `user`;

// cart api

export const createCart = (ProductId, quantity, size) =>
  axios.post(url + `cart`, { ProductId, quantity, size });
export const fetchCart = () => axios.get(url + `cart`);
