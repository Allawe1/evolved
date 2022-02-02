import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import $ from "jquery";
import "./styles.css";
function NavBar() {
  // $(".itemSpace").hover(function () {
  //   $(this).css("color", "#385efc");
  // });
  // $(".itemSpace").mouseleave(function () {
  //   $(this).css("color", "black");
  // });

  const handelHover = (num) => {
    if (num == "1") {
      $(".1").css("color", "#385efc");
    } else if (num == "2") {
      $(".2").css("color", "#385efc");
    } else if (num == "3") {
      $(".3").css("color", "#385efc");
    } else if (num == "4") {
      $(".4").css("color", "#385efc");
    }
  };
  const handelLeave = (num) => {
    if (num == "1") {
      $(".1").css("color", "black");
    } else if (num == "2") {
      $(".2").css("color", "black");
    } else if (num == "3") {
      $(".3").css("color", "black");
    } else if (num == "4") {
      $(".4").css("color", "black");
    }
  };
  const hiddenDiv = () => {
    $(".mobileDiv").toggle();
  };
  const history = useLocation();
  // $(".navTitle").click(() => {
  //   history.push("/contact");
  // });
  // document.getElementsByClassName("navTitle").onClick = () => {
  //   history.push("/about");
  // };

  return (
    <>
      <Navbar
        expand="md"
        collapseOnSelect
        variant="light"
        style={{ position: "relative", zIndex: 99 }}
      >
        <Container fluid>
          <Navbar.Toggle
            onClick={() => hiddenDiv()}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="start mt-3">
              <Nav.Item>
                <Nav.Link
                  onMouseEnter={() => handelHover("1")}
                  onMouseLeave={() => handelLeave("1")}
                  className="itemSpace 1"
                  href="/shop"
                >
                  shop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseEnter={() => handelHover("2")}
                  onMouseLeave={() => handelLeave("2")}
                  className="itemSpace 2"
                  href="/about"
                >
                  about
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseEnter={() => handelHover("3")}
                  onMouseLeave={() => handelLeave("3")}
                  className="itemSpace 3"
                  href="/contact"
                >
                  contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="center mt-3">
              <Nav.Link
                className="4"
                onMouseEnter={() => handelHover("4")}
                onMouseLeave={() => handelLeave("4")}
                href="/"
              >
                Evolve
              </Nav.Link>
            </Nav>
            <Nav className="left mt-3">
              {/* <Nav.Link className="iconSpace" href="#deets">
                <i className="fas fa-search"></i>
              </Nav.Link> */}
              <Nav.Link className="iconSpace" eventKey={2} href="/login">
                <i className="far fa-user"></i>
              </Nav.Link>
              <Nav.Link className="iconSpace" eventKey={2} href="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mobileDiv">
        <h1 className="navTitle"> EVOLVED</h1>
        <i className="far fa-user"></i>
        <i style={{ paddingLeft: 30 }} className="fas fa-shopping-cart"></i>
      </div>
    </>
  );
}

export default NavBar;
