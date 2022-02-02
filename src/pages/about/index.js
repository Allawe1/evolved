import React from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../layout/footer";
import "./about.css";
function About() {
  return (
    <>
      <div className="aboutDiv">
        <Row className="about">
          <Col>
            <h1>ABOUT US</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab
              laudantium, facilis debitis praesentium eligendi?
            </p>
          </Col>
          <Col>
            <img
              className="aboutImg"
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-small-2a2faf4cb65f77ff8a7957d0f3f5c335a0d13a328f773d30ae252d81e8475dce.png"
              alt="about1"
              width={600}
              height={400}
            />
          </Col>
        </Row>
        <Row className="story">
          <Col>
            <img
              className="aboutImg"
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/snowdevil/snowdevil-about-online-store-sustainability@desktop-d45981b88381b90b17d60887fa0ad6429568d50b08b1d7fb6c5e86eabf7ee84a.png"
              alt="about2"
            />
          </Col>
          <Col>
            <h2>EVOLVE STORY</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit .</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam eius
              et fuga iusto suscipit. Aliquid sed labore nisi dolore asperiores.
            </p>
          </Col>
        </Row>
        <Row className="mission">
          <h3>OUR MISSION</h3>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore
            deserunt illo labore fuga amet corrupti facere magnam beatae
            voluptate corporis inventore, quae, nulla tenetur?
          </p>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default About;
