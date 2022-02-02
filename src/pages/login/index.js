import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./login.css";
import { isEmail } from "validator";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";
import { Link } from "react-router-dom";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useEffect } from "react";
import { setMessage } from "../../redux/actions/message";
function Login(props) {
  const [email, setEmail] = useState("");
  const [EmailR, setEmailR] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const checkBtn = useRef();

  const { isLoggedIn } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  console.log(isLoggedIn);
  if (isLoggedIn) {
    props.history.push("/profile");
  }

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <Row className="loginRow">
        <Col>
          <div className="loginDiv">
            <h4>Login</h4>
            <p>EMAIL ADDRESS *</p>
            <Form1 ref={form} onSubmit={handleLogin}>
              <Form.Control
                className="loginForm"
                type="email"
                placeholder="Email"
                onChange={onChangeEmail}
                value={email}
                validations={[required]}
              />
              <p>PASSWORD *</p>
              <Form.Control
                className="loginForm"
                type="password"
                placeholder="Password"
                onChange={onChangePassword}
                value={password}
                validations={[required]}
              />
              <button disabled={loading} className="loginBtn">
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
              {/* {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )} */}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form1>
          </div>
        </Col>
        <Col>
          <div className="registerDiv">
            <h4>Register</h4>
            <p>EMAIL ADDRESS *</p>
            <Form>
              <Form.Control
                className="loginForm"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmailR(e.target.value)}
                value={EmailR}
              />
            </Form>
            <p style={{ fontSize: 14 }}>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes.
            </p>
            <button className="loginBtn">Register</button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
