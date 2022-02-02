import React, { useReducer, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import shop from "../../assets/images/shop.png";

import "./home.css";
import $ from "jquery";
import { useEffect } from "react";
import { getProduct } from "../../redux/actions/product";
import { useDispatch, useSelector, connect } from "react-redux";
import ProductCard from "./productCard";
import New from "./new";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../layout/footer";

const mapStateToProps = (state) => {
  return {
    products: state.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(getProduct()),
  };
};
const Home = (props) => {
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false);
  const [showButton4, setShowButton4] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    props.getProduct();
    if (props.products.data.products) {
      setLoading(true);
      console.log(props.products.data.products);
    } else {
      setLoading(false);
    }
  }, []);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   localStorage.clear();
  //   dispatch(getProduct());
  // }, [dispatch]);
  // var product = useSelector((state) => state.product);
  // console.log(product);

  const handleHover = (type) => {
    if (type == "shop") {
      setShowButton1(!showButton1);
      $(".section1").css({
        background: `#F98866`,
        height: "100%",
        overflow: "hidden",
        "-webkit-transition": "background 1s linear",
        "-moz-transition": "background 1s linear",
        "-o-transition": "background 1s linear",
        "-ms-transition": "background 1s linear",
        transition: "background 1s linear",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "cover",
      });
      $(".newShape , .contactShape , .aboutShape").css({
        fill: "transparent",
        stroke: "white",
        "stroke-width": "2px",
        "stroke-linejoin": "round",
      });
      $(".shopShape").css({
        fill: "#FF420E",
      });
    } else if (type == "new") {
      setShowButton2(!showButton2);
      $(".section1").css({
        background: "#FF420E",
        height: "100%",
        overflow: "hidden",
        "-webkit-transition": "background 1s linear",
        "-moz-transition": "background 1s linear",
        "-o-transition": "background 1s linear",
        "-ms-transition": "background 1s linear",
        transition: "background 1s linear",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "cover",
      });
      $(".contactShape , .aboutShape , .shopShape").css({
        fill: "transparent",
        stroke: "white",
        "stroke-width": "2px",
        "stroke-linejoin": "round",
      });
      $(".newShape").css({
        fill: "#F98866",
      });
    } else if (type == "about") {
      setShowButton3(!showButton3);
      $(".section1").css({
        background: "#80BD9E",
        height: "100%",
        overflow: "hidden",
        "-webkit-transition": "background 1s linear",
        "-moz-transition": "background 1s linear",
        "-o-transition": "background 1s linear",
        "-ms-transition": "background 1s linear",
        transition: "background 1s linear",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "cover",
      });
      $(".newShape , .contactShape , .shopShape").css({
        fill: "transparent",
        stroke: "white",
        "stroke-width": "2px",
        "stroke-linejoin": "round",
      });
      $(".aboutShape").css({
        fill: "#89DA59",
      });
    } else if (type == "contact") {
      setShowButton4(!showButton4);
      $(".section1").css({
        background: "#89DA59",
        height: "100%",
        overflow: "hidden",
        "-webkit-transition": "background 1s linear",
        "-moz-transition": "background 1s linear",
        "-o-transition": "background 1s linear",
        "-ms-transition": "background 1s linear",
        transition: "background 1s linear",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "cover",
      });
      $(".newShape , .aboutShape , .shopShape").css({
        fill: "transparent",
        stroke: "white",
        "stroke-width": "2px",
        "stroke-linejoin": "round",
      });
      $(".contactShape").css({
        fill: "#80BD9E",
      });
    } else {
      setShowButton1(false);
      setShowButton2(false);
      setShowButton3(false);
      setShowButton4(false);
      $(".section1").css({
        "background-color": "white",
        "background-image": "none",
      });
      $(".newShape").css({
        fill: "#FCA2D5",
        "stroke-width": "none",
        "stroke-linejoin": "none",
      });
      $(".contactShape").css({
        fill: "#FB9929",
        "stroke-width": "none",
        "stroke-linejoin": "none",
      });
      $(".aboutShape").css({
        fill: "#FFC09E",
        "stroke-width": "none",
        "stroke-linejoin": "none",
      });
      $(".shopShape").css({
        fill: "#385EFC",
        "stroke-width": "none",
        "stroke-linejoin": "none",
      });
    }
  };
  return (
    <>
      <div className="mainHome">
        <div className="section1">
          <Row style={{ marginLeft: 120 }}>
            <div
              className="container vivify driveInTop"
              onMouseEnter={() => handleHover("shop")}
              onMouseLeave={() => handleHover("leave")}
            >
              <svg
                id="shop-shape-svg"
                viewBox="0 0 682 317"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="shopShape"
                  x="36.0352"
                  width="651.769"
                  height="226.326"
                  rx="113.163"
                  transform="rotate(8.13736 36.0352 0)"
                  fill="#385EFC"
                ></rect>
              </svg>
              {showButton1 && <Button title={"shop"} to="/shop" />}
            </div>

            <div
              className="container2 vivify driveInTop"
              onMouseEnter={() => handleHover("new")}
              onMouseLeave={() => handleHover("leave")}
            >
              <svg
                id="new-shape-svg"
                viewBox="0 0 564 604"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="newShape"
                  d="M474.719 470.974C584.689 332.97 566.052 133.991 435.251 18.4948C428.285 12.3482
               417.6 13.2283 411.802 20.4958L21.3701 510.52C15.5721 517.788 17.1105 528.4 24.6674 
               533.801C166.541 635.382 364.749 608.978 474.719 470.974Z"
                  fill="#FCA2D5"
                ></path>
              </svg>
              {showButton2 && <Button title={"New Collection"} to="/shop" />}
            </div>
          </Row>
          <Row style={{ marginLeft: 50 }}>
            <div
              className="container3 vivify driveInTop"
              onMouseEnter={() => handleHover("about")}
              onMouseLeave={() => handleHover("leave")}
            >
              <svg
                id="about-shape-svg"
                viewBox="0 0 570 570"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="aboutShape"
                  d="M285 570C442.401 570 570 442.401 570 285C570 127.599 442.401 0 285 0C127.599 0 0 127.599 0 285C0 442.401 127.599 570 285 570Z"
                  fill="#FB9929"
                ></path>
              </svg>
              {showButton3 && <Button title={"about us"} to="/about" />}
            </div>
            <div
              className="container3 vivify driveInTop"
              onMouseEnter={() => handleHover("contact")}
              onMouseLeave={() => handleHover("leave")}
            >
              <svg
                id="contact-shape-svg"
                viewBox="0 0 575 569"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="contactShape"
                  d="M39.9671 235.085C26.9974 240.309 18.1511 252.495 17.1918 266.48C17.1889 266.526 17.187 266.556 17.1831 266.617C16.273 280.545 23.3643 293.785 35.4633 300.696C493.144 562.639 491.241 564.13 498.159 565.655C508.536 567.935 519.393 565.574 527.883 559.164C536.374 552.754 541.665 542.958 542.347 532.348L572.369 71.1925C573.189 58.6586 567.525 46.6061 557.384 39.2428C547.242 31.8794 534.043 30.2704 522.415 34.9415L39.9671 235.085Z"
                  fill="#FFC09E"
                ></path>
              </svg>
              {showButton4 && <Button title={"contact Us"} to="/contact" />}
            </div>
          </Row>
        </div>
        <New />
        <div className="section3">
          <Row className="slider-row">
            {isLoading ? (
              props.products.data.products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })
            ) : (
              <div>loading</div>
            )}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Button = (props) => {
  let history = useHistory();
  const routeChange = (to) => {
    let path = `newPath`;

    history.push(to);
  };
  return (
    <button onClick={() => routeChange(props.to)} className="btn">
      {props.title}
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
