import React from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";
import boots from "../../assets/images/boots.jfif";
import jeans from "../../assets/images/jeans.jfif";
import shirts from "../../assets/images/shirts.jfif";
import { useState } from "react";
function New() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="section2">
      <h2>Our Latest Collection</h2>
      <Carousel
        variant="dark"
        activeIndex={index}
        onSelect={handleSelect}
        className="slider"
      >
        <Carousel.Item>
          <img className="slider-img w-50" src={boots} alt="First slide" />
          <Carousel.Caption>
            <h3 className="slider-text">Boots</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider-img w-50" src={shirts} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="slider-text">shirts</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider-img w-50" src={jeans} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="slider-text">Jeans</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default New;
