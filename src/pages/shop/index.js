import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  getProduct,
  getProductByGatogery,
  getProductById,
} from "../../redux/actions/product";
import ProductCard from "./productCard";
import { connect } from "react-redux";
import "./shop.css";

const mapStateToProps = (state) => {
  return {
    products: state.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(getProduct()),
    getProductById: (id) => dispatch(getProductById(id)),
    getProductByGatogery: (id) => dispatch(getProductByGatogery(id)),
  };
};
function Shop(props) {
  const [product, setProduct] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    // if (flag) {
    //   console.log(flag);
    //   setFlag(false);
    //   console.log(flag);
    //   props.getProduct();
    // }
    setProduct(props.products.data.products);
    console.log(product);
  }, [props.products]);

  const handelClick1 = (gatogery) => {
    handleClick(gatogery);
  };
  const handleClick = async (gatogery) => {
    if (gatogery == "Jeans") {
      props.getProductByGatogery(1);
      const data = props.products.data.products;
      setProduct(data);
    } else if (gatogery == "Shirts") {
      props.getProductByGatogery(2);
      const data = props.products.data.products;
      setProduct(data);
    } else if (gatogery == "Boots") {
      props.getProductByGatogery(3);
      const data = props.products.data.products;
      setProduct(data);
    } else if (gatogery == "All") {
      props.getProduct();
      const data = props.products.data.products;
      setProduct(data);
    }
  };
  return (
    <>
      <div className="mainShop">
        <Row className="row">
          <div className="circle" onClick={() => handelClick1("Jeans")}>
            Jeans
          </div>
          <div className="circle" onClick={() => handelClick1("Shirts")}>
            Shirts
          </div>
          <div className="circle" onClick={() => handelClick1("Boots")}>
            Boots
          </div>
          <div className="circle" onClick={() => handelClick1("All")}>
            All
          </div>
        </Row>
        <Row className="">
          {product.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </Row>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
