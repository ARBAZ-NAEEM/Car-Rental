import React from "react";
import { Col, Container, Row } from "reactstrap";
import gallery1 from "../../assets/img/gallery1.jpg";
import gallery2 from "../../assets/img/gallery2.jpg";
import gallery3 from "../../assets/img/gallery3.jpg";
import gallery4 from "../../assets/img/gallery4.jpg";
import gallery5 from "../../assets/img/gallery5.jpg";
import gallery6 from "../../assets/img/gallery6.jpg";
import gallery7 from "../../assets/img/gallery7.jpg";
import gallery8 from "../../assets/img/gallery8.jpg";
import gallery9 from "../../assets/img/gallery9.jpg";

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <Container fluid>
        <div className="gallery-images">
          <Row>
            <Col lg="2" md="2" xs="12">
              <div className="img-glry glr1-hover mb-4">
                <img src={gallery1} alt="" style={{ width: "100%" }} />
              </div>
              <div className="img-glry glr2-hover">
                <img src={gallery2} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col lg="2" md="2" xs="12">
              <div className="img-glry glr3-hover">
                <img src={gallery3} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col lg="2" md="2" xs="12">
              <div className="img-glry glr4-hover mb-4">
                <img src={gallery4} alt="" style={{ width: "100%" }} />
              </div>
              <div className="img-glry glr5-hover">
                <img src={gallery5} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col lg="4" md="4" xs="12">
              <Row>
                <Col lg="6" md="6" xs="12">
                  <div className="img-glry glr6-hover">
                    <img src={gallery6} alt="" style={{ width: "100%" }} />
                  </div>
                </Col>
                <Col lg="6" md="6" xs="12">
                  <div className="img-glry glr7-hover">
                    <img src={gallery7} alt="" style={{ width: "100%" }} />
                  </div>
                </Col>
              </Row>
              <div className="img-glry glr8-hover mt-4">
                <img src={gallery8} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col lg="2" md="2" xs="12">
              <div className="img-glry glr9-hover">
                <img src={gallery9} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default GallerySection;
