import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import carMain from "../../assets/img/Big_car_main.png";
import callCenter from "../../assets/img/customer-care 1.png";
import traffic from "../../assets/img/traffic-jam 1.png";
import hours from "../../assets/img/24-hours-support.png";

const CarSection = () => {
  return (
    <Fragment>
      <div className="car-section">
        <Container>
          <div className="car-titlebar text-center">
            <h2 className="heading-discover" data-aos="fade-up">
              Our Doors Are Always
              <br />
              <span>Open To Welcome You</span>
            </h2>
            <div
              className="car-img"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img src={carMain} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div className="car-background">
        <Container>
          <Row>
            <Col>
              <div className="d-flex car-sc">
                <div className="car-count">
                  <h3 className="car-count-heading mb-0">01</h3>
                  <div
                    className="car-count-img"
                    data-aos="flip-right"
                    data-aos-duration="3000"
                  >
                    <img src={callCenter} alt="" />
                  </div>
                </div>
                <div className="car-subtext">
                  <h5 data-aos="fade-up" data-aos-duration="3000">
                    Multilingual Support
                  </h5>
                  <p>
                    Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet,{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex car-sc">
                <div className="car-count">
                  <h3 className="car-count-heading mb-0">02</h3>
                  <div
                    className="car-count-img"
                    data-aos="flip-right"
                    data-aos-duration="3000"
                  >
                    <img src={traffic} alt="" />
                  </div>
                </div>
                <div className="car-subtext">
                  <h5 data-aos="fade-up" data-aos-duration="3000">
                    Diverse fleet
                  </h5>
                  <p>
                    Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet,{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex car-sc">
                <div className="car-count">
                  <h3 className="car-count-heading mb-0">03</h3>
                  <div
                    className="car-count-img"
                    data-aos="flip-right"
                    data-aos-duration="3000"
                  >
                    <img src={hours} alt="" />
                  </div>
                </div>
                <div className="car-subtext">
                  <h5 data-aos="fade-up" data-aos-duration="3000">
                    24/7 customer service.
                  </h5>
                  <p>
                    Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
                    ipsum dolor sit amet, Lorem ipsum dolor sit amet,{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default CarSection;
