import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import footerLogo from "../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-section text-light">
      <div className="page-footer">
        <Container>
          <div className="footer-menus">
            <Row>
              <Col lg="4" md="4" xs="12">
                <div className="footer-one">
                  <div className="footer-one-text">
                    <div className="footer-one-logo">
                      <img src={footerLogo} />
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt.Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="4" xs="12">
                <div className="footer-two">
                  <div className="footer-two-text">
                    <h4 className="footer-title">
                      <span>About Us</span>
                    </h4>
                    <ul className="footer-two-menu">
                      <li>1-567-124-44227</li>
                      <li>182 main street pert habour 8007</li>
                      <li>Mon-sat 8:00-18:00 Sunday Closed</li>
                    </ul>
                    <ul className="social-menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="4" xs="12">
                <div className="footer-three">
                  <div className="footer-three-text">
                    <h4 className="footer-title">
                      <span>Newsletter</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                    <div className="footer-contact">
                      <input className="footer-field" placeholder="Email i'd" />
                      <Button color="primary" className="footer-submit">
                        SUBSCRIBE
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="footer-copyright">
        <Container>
          <div className="footer-copyright-text text-center">
            <p className="mb-0">
              © Rumble - 2020 | All Right Reserved. Designed By Hasnain
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
