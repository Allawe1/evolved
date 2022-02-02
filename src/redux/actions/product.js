import * as api from "../api";

export const getProduct = () => async (dispatch) => {
  const data = await api.fetchProduct();
  try {
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductById = (id) => async (dispatch) => {
  const data = await api.fetchProductById(id);
  try {
    dispatch({ type: "FETCH_BY_ID", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductByGatogery = (id) => async (dispatch) => {
  const data = await api.fetchProductByGatogery(id);
  try {
    dispatch({ type: "FETCH_BY_GATOGERY", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
