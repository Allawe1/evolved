import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function Address(props) {
  return (
    <div className="shipDiv  vivify fadeIn">
      <h1 style={{ marginBottom: "-2%", paddingTop: "6%", color: "white" }}>
        shiping address
      </h1>
      <Form>
        <Row style={{ marginRignt: "0" }}>
          <Col>
            {" "}
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label className="addressLable">
                first name <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label className="addressLable">
                last name <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            {" "}
            <Form.Group className="addressGroup" controlId="formBasicEmail">
              <Form.Label className="addressLable">
                Country <span class="required">*</span>
              </Form.Label>
              {/* <select name="country" id="country">
                {countryListAlpha2.map((country) => {
                  return <option value="">{country}</option>;
                })}
              </select> */}
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group className="addressGroup" controlId="formBasicEmail">
              <Form.Label
                className="addressLable"
                style={{ marginRight: "90%" }}
              >
                State <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Form.Group className="addressGroup2" controlId="formBasicEmail">
              <Form.Label
                className="addressLable"
                style={{ marginRight: "95%" }}
              >
                City <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group className="addressGroup2" controlId="formBasicEmail">
              <Form.Label className="addressLable">
                Postcode / ZIP <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            {" "}
            <Form.Group className="addressGroup3" controlId="formBasicEmail">
              <Form.Label className="addressLable">
                Street address <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group className="addressGroup3" controlId="formBasicEmail">
              <Form.Label className="addressLable">
                additinal information (building number , unit number){" "}
                <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ marginTop: "0" }}>
          <Col>
            {" "}
            <Form.Group className="addressGroup4" controlId="formBasicEmail">
              <Form.Label
                className="addressLable"
                style={{ marginRight: "90%" }}
              >
                email <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group className="addressGroup4" controlId="formBasicEmail">
              <Form.Label className="addressLable">
                phone number <span class="required">*</span>
              </Form.Label>
              <Form.Control type="text" size="lg" />
            </Form.Group>
          </Col>
        </Row>{" "}
        <Button style={{ marginTop: "-30%" }}>Save Changes</Button>
      </Form>
    </div>
  );
}

export default Address;
