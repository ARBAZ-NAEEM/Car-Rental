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
          <Button color="secondary" className="btn-lease">
            Long Term Lease
          </Button>
        </div>
        {/* <Container> */}
        <div className="our-partners">
          <Row>
            <Col md="6" lg="6" xs="12">
              <hr className="text-light hr-sizing" />
              <div className="d-flex justify-content-around align-items-center">
                <img src={logo5} />
                <img src={logo3} />
                <img src={logo1} />
              </div>
            </Col>
            <Col md="6" lg="6" xs="12">
              <hr className="text-light hr-sizing" />
              <div className="d-flex justify-content-around align-items-center">
                <img src={logo6} />
                <img src={logo2} />
                <img src={logo4} />
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