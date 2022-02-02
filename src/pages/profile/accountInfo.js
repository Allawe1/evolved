import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { update } from "../../redux/actions/auth";
import "./profile.css";

function mapStateToProps(state) {
  const { user } = state.user;
  return {
    user,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    update: (id, newUserInfo) => dispatch(update(id, newUserInfo)),
  };
};
const AccountInfo = (props) => {
  console.log(props);
  const [fName, setFname] = useState(props.currentUser.first_name);
  const [lName, setLname] = useState(props.currentUser.last_name);
  const [email, setEmail] = useState(props.currentUser.email);
  const [username, setUsername] = useState(props.currentUser.username);
  const [password, setPassword] = useState(props.currentUser.password);
  const handleSave = (e) => {
    e.preventDefault();
    console.log(fName, lName, username, email);

    props.update(props.currentUser.id, {
      first_name: fName,
      last_name: lName,
      email: email,
      username: username,
    });
  };
  return (
    <div className="infoDiv vivify fadeIn">
      <h2 style={{ paddingTop: "6%" }}>Account</h2>
      <Form>
        <Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="formLabel">
                  first name <span class="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={fName}
                  onChange={(e) => setFname(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="formLabel">
                  last name <span class="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={lName}
                  onChange={(e) => setLname(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="formLabel">
                  user name<span class="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="formLabel"
                  style={{ marginRight: "80%" }}
                >
                  Email<span class="required">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <h2 style={{ marginTop: "-2%" }}>Change Password</h2>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="formLabel"
                  style={{ marginRight: "80%" }}
                >
                  CURRENT PASSWORD
                </Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="formLabel"
                  style={{ marginRight: "80%" }}
                >
                  NEW PASSWORD
                </Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="formLabel"
                  style={{ marginRight: "80%" }}
                >
                  CONFIRM NEW PASSWORD
                </Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
          </Row>
        </Row>
        <Button onClick={(e) => handleSave(e)} className="productBtn">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
