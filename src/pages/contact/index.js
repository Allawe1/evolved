import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Footer from "../../layout/footer";
import "./contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="mainContact">
        <div className="contactDiv1">
          <h1>do you have any question? Contact Us</h1>
          <p className="email">
            <span>info@evovled.com</span>
          </p>
          <p className="or">or</p>
          <h4 className="leaveM"> leave us a message </h4>
        </div>
        <div className="form">
          <Form>
            <Row className="form-row">
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <Form.Control
                className="form-input"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Control
                as="textarea"
                rows={8}
                className="form-input-lg"
                type="text"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </Row>
          </Form>
          <button className="formBtn">Submit</button>
        </div>
        <div className="contactDiv3">
          <h1>sd</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
