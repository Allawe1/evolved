import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import "./checkout.css";
import { PayPalButton } from "react-paypal-button-v2";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    product: state.product,
  };
};
function Checkout(props) {
  console.log(props.cart.cartItems);
  return (
    <>
      <div>
        <Row>
          <Col>
            <h3>Shiping Details</h3>
            <Form>
              <Row>
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      first name <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      last name <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      Country <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      State <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      City <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      Postcode / ZIP<span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>{" "}
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      Street address <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      first name <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>{" "}
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      Phone <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="addressLable">
                      Email address <span class="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" size="lg" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <h3>My Prodcut</h3>
            <Table responsive className="chekoutTable" borderless>
              <thead>
                <tr>
                  <th>product</th>
                  <th>subtotal</th>
                </tr>{" "}
              </thead>
              <tbody>
                {props.cart.cartItems.map((product) => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.subtotal}</td>
                    </tr>
                  );
                })}
                <tr>
                  <th>total</th>
                  <th>250</th>
                </tr>
              </tbody>
            </Table>{" "}
            <PayPalButton
              options={{
                clientId:
                  "AeUXEisk4VYu5sNgtpYJiTPv21tpiN2o00dqBdw3i1Pjoh3WjHCACnK3twoItspHl5i9NHhsfgUMPW7N",
                currency: "USD",
              }}
              amount={1}
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );

                console.log({ details, data });
              }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(Checkout);
