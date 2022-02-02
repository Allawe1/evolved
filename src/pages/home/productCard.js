import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";
function ProductCard(props) {
  const { id, price, name } = props.product;
  return (
    <Col>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/products/${name}`,
          state: props.product,
        }}
      >
        <Card className="section3-card">
          <Card.Img
            variant="top"
            src="https://mafanfa.com/wp-content/uploads/2021/03/Maria-Francia-12-768x1152.jpg"
            className="section3-img"
          />
          <Card.Title className="card-text">{name}</Card.Title>
          <Card.Text>{price}$</Card.Text>
        </Card>
      </Link>
    </Col>
  );
}

export default ProductCard;
