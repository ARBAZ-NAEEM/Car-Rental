import React from "react";
import { Col, Container, Row } from "reactstrap";
import car1 from "../../assets/img/cars1.png";
import car2 from "../../assets/img/car-wash1.png";
import car3 from "../../assets/img/mobile-payment1.png";
import car4 from "../../assets/img/loupe1.png";
import work1 from "../../assets/img/cards.png";
import work2 from "../../assets/img/Group.png";
import work3 from "../../assets/img/Vector.png";
import work4 from "../../assets/img/Group1.png";

const HowItWorks = () => {
  return (
    <div className="howitworks-section">
      <Container>
        <div className="howit-titlebar text-center">
          <h2
            className="heading-discover work-color"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            How it
            <br />
            <span>works</span>
          </h2>
          <p className="text-discover mt-3">
            We value the time and quality of travel for each of our clients
          </p>
        </div>
        <div className="howit-card">
          <Row className="howit-row1">
            <Col lg="3" md="6" xs="12" className="how-col1">
              <div className="howit-count">
                <h4>
                  <span>01</span>
                </h4>
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  Choose a <strong>Car</strong>
                </h3>
                <div
                  className="howit-img"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img src={car1} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="how-col2">
              <div className="img-how-it-work">
                <img src={work1} style={{ width: "100%" }} alt="" />
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="how-col3">
              <div className="howit-count">
                <h4>
                  <span>03</span>
                </h4>
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  Pick up the <strong>Vehicals</strong>
                </h3>
                <div
                  className="howit-img"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img src={car2} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="how-col4">
              <div className="img-how-it-work rmv-bf">
                <img src={work2} style={{ width: "100%" }} alt="" />
              </div>
            </Col>
            {/* </Row>
          <Row className="mt-4 howit-row2"> */}
            <Col lg="3" md="6" xs="12" className="how-col5">
              <div className="img-how-it-work">
                <img src={work3} style={{ width: "100%" }} alt="" />
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="how-col6">
              <div className="howit-count">
                <h4>
                  <span>02</span>
                </h4>
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  Pay <strong>Online</strong>
                </h3>
                <div
                  className="howit-img"
                  data-aos="flip-left"
                  data-aos-duration="3000"
                >
                  <img src={car3} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="how-col7">
              <div className="img-how-it-work">
                <img src={work4} style={{ width: "100%" }} alt="" />
              </div>
            </Col>
            <Col lg="3" md="6" xs="12" className="how-col8">
              <div className="howit-count">
                <h4>
                  <span>04</span>
                </h4>
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  Discover <strong>Milta</strong>
                </h3>
                <div
                  className="howit-img"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img src={car4} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
