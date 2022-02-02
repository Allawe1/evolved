// const cart = JSON.parse(localStorage.getItem("cart"));

// const initialState = cart ? { cart: cart } : { cart: null };

export default (state = { cartItems: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    // case "FETCH_ALL_CART":
    //   return {
    //     ...cart,
    //     cart: payload,
    //   };
    case "POST_CART":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          error: "",
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, error: "", cartItems: [...state.cartItems, item] };
      }

    case "REMOVE_ITEM_CART":
      return {
        ...state,
        error: "",
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
