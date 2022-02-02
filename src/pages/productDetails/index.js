import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./productDetails.css";
import $ from "jquery";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router";
import { postCart } from "../../redux/actions/cart";
import { connect } from "react-redux";
import Footer from "../../layout/footer";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postCart: (ProductId, quantity, size) =>
      dispatch(postCart(ProductId, quantity, size)),
  };
};

function ProductDetail(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  var emp = useLocation();
  var gatogeryName = "";
  if (emp.state.ProductGatogeryId == 1) {
    gatogeryName = "Jeans";
  } else if (emp.state.ProductGatogeryId == 2) {
    gatogeryName = "Shirts";
  } else if (emp.state.ProductGatogeryId == 3) {
    gatogeryName = "Boots";
  }

  console.log(emp.state);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  $(".productBtn").hover(function () {
    $(this).css("backgroundColor", "pink");
    $(this).css("color", "#385efc");
  });
  $(".productBtn").mouseleave(function () {
    $(this).css("backgroundColor", "#385efc");
    $(this).css("color", "#ffc09e");
  });

  $(".dropdown").click(function () {
    $(this).attr("tabindex", 1).focus();
    $(this).toggleClass("active");
    $(this).find(".dropdown-menu").slideToggle(300);
  });
  $(".dropdown").focusout(function () {
    $(this).removeClass("active");
    $(this).find(".dropdown-menu").slideUp(300);
  });
  $(".dropdown .dropdown-menu li").click(function () {
    $(this).parents(".dropdown").find("span").text($(this).text());
    $(this)
      .parents(".dropdown")
      .find("input")
      .attr("value", $(this).attr("id"));
  });
  /*End Dropdown Menu*/

  // $(".dropdown-menu li").click(function () {
  //   var input =
  //       "<strong>" +
  //       $(this).parents(".dropdown").find("input").val() +
  //       "</strong>",
  //     msg = '<span class="msg">Hidden input value: ';
  //   $(".msg").html(msg + input + "</span>");
  // });
  var selectedSize;
  const handdleAddToCart = () => {
    console.log(selectedSize);
    props.postCart(emp.state.id, 3, selectedSize);
  };
  $(".dropdown-menu li").click(function () {
    selectedSize = $(this).text();
  });
  return (
    <>
      <div className="productMain">
        <hr className="topHr" />
        <Row className="productRow">
          <Col className="col-8">
            <img
              className="productImage"
              alt=""
              src="https://mafanfa.com/wp-content/uploads/2021/03/Maria-Francia-12-768x1152.jpg"
            />
          </Col>
          <Col className="col-4">
            <div className="prductDetail">
              <p className="productPath">
                {gatogeryName}/{emp.state.name}
              </p>
              <h1 className="productName">{emp.state.name}</h1>
              <h2 className="productPrice">{emp.state.price}</h2>
              <hr />
              <Accordion
                style={{ boxShadow: "none" }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>DESCRIPTION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{emp.state.desc}</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                style={{ boxShadow: "none", marginTop: 10, paddingTop: 12 }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>ADDITIONAL INFORMATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <span>
                    Size :
                    <div style={{ marginLeft: "10%" }} className="dropdown">
                      <div className="select">
                        <span>Select Size</span>
                        <i className="fa fa-chevron-left"></i>
                      </div>
                      <input type="hidden" name="gender" />
                      <ul className="dropdown-menu">
                        {emp.state.size.map((sizes) => {
                          return (
                            <li key={sizes} value={sizes} id="sizes">
                              {sizes}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* <select name="size" id="size">
                      <option value>Choose an option…</option>
                      {emp.state.size.map((sizes) => {
                        return (
                          <option key={sizes} value={sizes}>
                            {sizes}
                          </option>
                        );
                      })}
                    </select>{" "} */}
                  </span>
                </AccordionDetails>
              </Accordion>
              <hr />
              <button onClick={handdleAddToCart} className="productBtn">
                ADD TO CART
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
