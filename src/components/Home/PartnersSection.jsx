import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import logo1 from "../../assets/img/logo-01.png";
import logo2 from "../../assets/img/logo-02.png";
import logo3 from "../../assets/img/logo-03.png";
import logo4 from "../../assets/img/logo-04.png";
import logo5 from "../../assets/img/logo-05.png";
import logo6 from "../../assets/img/logo-06.png";

const PartnersSection = () => {
  return (
    <div className="partners-section">
      <Container>
        <div className="long-term">
          <Button color="secondary" className="btn-lease" data-aos="fade-up">
            <span> Long Term Lease</span>
          </Button>
        </div>
        {/* <Container> */}
        <div className="our-partners">
          <Row>
            <Col md="12" lg="6" xs="12">
              <hr className="text-light hr-sizing" />
              <div className="d-flex justify-content-around align-items-center">
                <img src={logo5} alt="" />
                <img src={logo3} alt="" />
                <img src={logo1} alt="" />
              </div>
            </Col>
            <Col md="12" lg="6" xs="12">
              <hr className="text-light hr-sizing" />
              <div className="d-flex justify-content-around align-items-center">
                <img src={logo6} alt="" />
                <img src={logo2} alt="" />
                <img src={logo4} alt="" />
              </div>
            </Col>
          </Row>
        </div>
        {/* </Container> */}
      </Container>
    </div>
  );
};

export default PartnersSection;
