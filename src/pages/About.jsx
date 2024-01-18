import React from "react";
import Header from "../components/Header";
import bgImg from "../assets/img/img-backg-pages.png";
import PageTitle from "../components/PageTitle";
import { Button, Col, Container, Row } from "reactstrap";
import groupServices from "../assets/img/group-service.png";
import groupAbout from "../assets/img/group-about.png";
import AboutSection from "../components/About/AboutSection";
import group1 from "../assets/img/group-quick.png";
import group2 from "../assets/img/group-profes.png";
import group3 from "../assets/img/group-multilng.png";
import group4 from "../assets/img/group-delivery.png";
import HowItWorks from "../components/Home/HowItWorks";
import CustomerSatisfication from "../components/Home/CustomerSatisfication";
import Testimonial from "../components/Home/Testimonial";
import PremiumSection from "../components/Home/PremiumSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page-about">
      <Header />
      <PageTitle heading="About us" bgImg={[bgImg]} gap="180px 0" />
      {/* <AboutSection bg="#F4EFEF" /> */}
      <div className="about-group-service">
        <Container>
          <div className="service-about-get">
            <Row className="align-items-center servc-row1">
              <Col md="6" lg="6" xs="12">
                <div className="servs-img">
                  <img src={groupServices} alt="" style={{ width: "100%" }} />
                </div>
              </Col>
              <Col md="6" lg="6" xs="12">
                <div className="service-about-content">
                  <h2 data-aos="fade-up">
                    <span>Lorem ipsum</span> <br /> dolor sit amet
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet,
                  </p>
                  <Button color="primary" className="mt-1">
                    Hire Now
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center servc-row2">
              <Col md="6" lg="6" xs="12">
                <div className="service-about-content">
                  <h2 data-aos="fade-up">
                    <span>Lorem ipsum</span> <br /> dolor sit amet
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
              </Col>
              <Col md="6" lg="6" xs="12">
                <div className="servs-img">
                  <img src={groupAbout} alt="" style={{ width: "100%" }} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="unique-feature-section">
        <Container>
          <div className="feature-text ">
            <h2
              style={{ marginBottom: 0 }}
              className="text-center"
              data-aos="fade-up"
            >
              <span className="our-color">Our</span>
            </h2>
            <h2 className="text-center" data-aos="fade-up">
              Unique Features
            </h2>
            <Row className="feature-section-center">
              <Col lg="1" md="1"></Col>
              <Col lg="5" md="5" xs="12" className="col-pad-left">
                <div className="d-flex about-count">
                  <div className="car-count">
                    <h3 className="car-count-heading mb-2">01</h3>
                    <div className="car-count-img">
                      <img src={group1} alt="" />
                    </div>
                  </div>
                  <div className="about-subtext">
                    <h4>Quick Access Rentals</h4>
                  </div>
                </div>
              </Col>
              <Col lg="5" md="5" xs="12" className="col-pad-right">
                <div className="d-flex about-count">
                  <div className="car-count">
                    <h3 className="car-count-heading mb-2">02</h3>
                    <div className="car-count-img">
                      <img src={group2} alt="" />
                    </div>
                  </div>
                  <div className="about-subtext">
                    <h4>Professional Service</h4>
                  </div>
                </div>
              </Col>
              <Col lg="1" md="1"></Col>
              <Col lg="1" md="1"></Col>
              <Col
                lg="5"
                md="5"
                xs="12"
                className="slast-count-class col-pad-left"
              >
                <div className="d-flex about-count">
                  <div className="car-count">
                    <h3 className="car-count-heading mb-2">03</h3>
                    <div className="car-count-img">
                      <img src={group3} alt="" />
                    </div>
                  </div>
                  <div className="about-subtext">
                    <h4>Multilingual Support</h4>
                  </div>
                </div>
              </Col>
              <Col
                lg="5"
                md="5"
                xs="12"
                className="last-count-class col-pad-right"
              >
                <div className="d-flex about-count">
                  <div className="car-count">
                    <h3 className="car-count-heading mb-2">04</h3>
                    <div className="car-count-img">
                      <img src={group4} alt="" />
                    </div>
                  </div>
                  <div className="about-subtext">
                    <h4>Diverse Fleet for Every Traveler</h4>
                  </div>
                </div>
              </Col>
              <Col lg="1" md="1"></Col>
            </Row>
          </div>
        </Container>
      </div>
      <HowItWorks />
      <CustomerSatisfication />
      <Testimonial />
      <PremiumSection />
      <Footer />
    </div>
  );
};

export default About;
