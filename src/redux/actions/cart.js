import * as api from "../api";

export const getCart = () => async (dispatch) => {
  const data = await api.fetchCart();

  try {
    dispatch({ type: "FETCH_ALL_CART", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const postCart =
  (ProductId, quantity, size) => async (dispatch, getState) => {
    const data = await api.createCart(ProductId, quantity, size);
    const productData = await api.fetchProductById(ProductId);
    const {
      cart: { cartItems },
    } = getState();
    try {
      dispatch({
        type: "POST_CART",
        payload: {
          name: productData.data.product.name,
          price: productData.data.product.price,
          quantity: quantity,
          size: size,
          subtotal: quantity * productData.data.product.price,
          product: ProductId,
        },
      });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      console.log(error.message);
    }
  };
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_ITEM_CART", payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
