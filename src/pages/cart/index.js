import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getProduct, getProductById } from "../../redux/actions/product";
import { Link } from "react-router-dom";
import "./cart.css";
import { getCart, removeFromCart } from "../../redux/actions/cart";
import Footer from "../../layout/footer";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    product: state.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => dispatch(getCart()),
    getProductById: (id) => dispatch(getProductById(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
function Cart(props) {
  console.log(props.cart);
  const [quantity, setQuantity] = useState(1);
  const [isEmpty, setEmpty] = useState(true);
  useEffect(() => {
    props.getCart();
    console.log(props.cart.cartItems);
    // if (props.cart) {
    //   props.getProductById(props.cart.cart.data.carts[0].ProductId);
    //   console.log(props.product);
    // }
  }, []);
  //  console.log(props.cart.cart.data.carts[0].ProductId);
  const removeFromCartHandler = (id) => {
    // delete action
    props.removeFromCart(id);
  };
  if (props.cart.cartItems.length != 0) {
    return (
      <>
        <div className="cartPage">
          <h1>cart - Evolved </h1>
          <div className="tableDiv">
            <Table
              size="xs"
              variant="light"
              borderless
              className="cartTable"
              responsive
            >
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>{" "}
              <tbody>
                {props.cart.cartItems.map((cart) => {
                  console.log(cart);
                  return (
                    <tr>
                      <td>
                        <img
                          style={{ marginLeft: "-20%", marginRight: "4%" }}
                          src="https://mafanfa.com/wp-content/uploads/2021/03/Maria-Francia-26-320x320.jpg"
                          alt="image"
                          width={100}
                          height={100}
                        />{" "}
                        {cart.name}
                      </td>
                      <td>
                        <p style={{ marginTop: 35 }}>{cart.price}</p>
                      </td>
                      <td>
                        {/* <input
                          style={{
                            width: "40px",
                            height: "30px",
                            marginTop: 35,
                          }}
                          type="number"
                          name="quantint"
                          id="quantity"
                          value={cart.quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        /> */}
                        <p style={{ marginTop: 35 }}>{cart.quantity}</p>
                      </td>
                      <td>
                        <p style={{ marginTop: 35 }}>
                          {cart.price * cart.quantity}
                        </p>
                      </td>
                      <td>
                        <Button
                          onClick={() => removeFromCartHandler(cart.product)}
                          style={{ marginTop: 30 }}
                        >
                          {" "}
                          remove
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="btnDiv">
            <Link to={"/checkout"}>
              <Button className="checkoutBtn">proceed to checkout</Button>
            </Link>{" "}
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div className="emptyDiv">
          <h1>Your cart is currently empty ! </h1>
          <hr />
          <div className="btnDiv">
            <Link to="/shop">
              <Button className="checkoutBtn">Return to shop</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
