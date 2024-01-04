import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import groupServices from "../../assets/img/group-service.png";

const CityServiceSection = () => {
  return (
    <div className="services-section">
      <Container>
        <div className="services-get">
          <Row className="align-items-center">
            <Col md="6" lg="6" xs="12">
              <div className="servs-img">
                <img src={groupServices} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col md="6" lg="6" xs="12">
              <div className="service-content">
                <h5 className="get-text-color">Get to know us</h5>
                <h3 className="mb-3">Services with a Wide Range of Cars</h3>
                <h5 className="color-change-first">
                  committed to providing our customers with
                </h5>
                <h5 className="color-change-second">exceptional service.</h5>
                <p className="mb-3">
                  Lorem ipsum is simply ipun txns mane so dummy text of free
                  available in market the printing and typesetting industry has
                  been the industry's standard dummy text ever.
                </p>
                <ul className="service-menu">
                  <li>Many Pickup Locations</li>
                  <li>Offering Low Prices</li>
                  <li>News & Luxury Cars</li>
                  <li>Trusted Rental Service</li>
                </ul>
                <Button color="primary" className="mt-1">
                  Discover More
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CityServiceSection;
