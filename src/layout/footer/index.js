import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <p>EVOLVED </p>
        <Row>
          <Col>
            <div className="footerContainer">
              <svg
                className="shopFooter"
                viewBox="0 0 570 570"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M285 570C442.401 570 570 442.401 570 285C570 127.599 442.401 0 285 0C127.599 0 0 127.599 0 285C0 442.401 127.599 570 285 570Z"
                  fill="#FCA2D5"
                ></path>
              </svg>
              <button style={{ marginLeft: "10%" }} className="btn shopBtn">
                SHOP
              </button>
              <Link to={"/about"} className="footerLink shopLink">
                SHOP
              </Link>
            </div>
          </Col>
          <Col>
            <div className="footerContainer">
              <svg
                className="homeFooter"
                viewBox="0 0 275 303"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M237.617 65.3305C180.825 -6.61518 77.9787 -20.7257 4.08976 31.7706C0.156906 34.5669 -0.661849 40.0751 2.32817 43.8673L203.994 299.307C206.984 303.099 212.533 303.576 216.159 300.393C284.32 240.651 294.41 137.276 237.617 65.3305Z"
                  fill="#FCA2D5"
                ></path>
              </svg>
              <button style={{ marginLeft: "30%" }} className="btn homeBtn">
                HOME
              </button>{" "}
              <Link to={"/"} className="footerLink homeLink">
                HOME
              </Link>
            </div>
          </Col>
          <Col>
            <div className="footerContainer">
              <svg
                className="aboutFooter"
                viewBox="0 0 304 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M288.561 0.841258C296.248 -2.16492 304.306 4.27762 303.066 12.4378L257.773 310.489C256.533 318.65 246.924 322.407 240.477 317.253L5.00369 129.002C-1.44323 123.848 0.106864 113.648 7.79386 110.642L288.561 0.841258Z"
                  fill="#FCA2D5"
                ></path>
              </svg>
              <button style={{ marginLeft: "20%" }} className="btn aboutBtn">
                ABOUT
              </button>
              <Link to={"/about"} className="footerLink aboutLink">
                ABOUT
              </Link>
            </div>
          </Col>
          <Col>
            <div className="footerContainer">
              <svg
                className="contactFooter"
                viewBox="0 0 297 294"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="109.168"
                  y="-46"
                  width="322.59"
                  height="226"
                  rx="113"
                  transform="rotate(43.3604 109.168 -46)"
                  fill="#FCA2D5"
                ></rect>
              </svg>
              <button className="btn contactBtn">CONTACT</button>
              <Link to={"/contact"} className="footerLink contactLink">
                CONTACT
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
// const Button = (props) => {
//   return <button className="btn">{props.title}</button>;
// };
export default Footer;
