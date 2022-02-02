import { combineReducers } from "redux";

import product from "./product";
import user from "./auth";
import message from "./message";
import cart from "./cart";

export default combineReducers({
  product,
  user,
  message,
  cart,
});
