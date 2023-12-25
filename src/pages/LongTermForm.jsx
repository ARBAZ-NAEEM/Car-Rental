import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PremiumSection from "../components/Home/PremiumSection";
import { Col, Container, Input, Label, Row, Button } from "reactstrap";
import circlesupport from "../assets/img/Feature Icon with circle.png";
import emailicon from "../assets/img/email 1.png";
import phoneicon from "../assets/img/viber 1.png";
import PageTitle from "../components/PageTitle";
import bgImg from "../assets/img/long-term.png";
import AboutSection from "../components/About/AboutSection";

const LongTermForm = () => {
  return (
    <div className="page-longterm-form">
      <Header />
      <PageTitle
        subHeading="Book Any Luxury Car in low price"
        heading="Long-Term Form"
        bgImg={bgImg}
        gap="180px 0"
      />
      <Container className="custom-form">
        <Row className="contact-section">
          <Col lg="4" md="4">
            <div className="right-section">
              <div className="image-icon">
                <img src={circlesupport} alt="" />
                <h3>LONG TERM LEASE </h3>
              </div>
              <Row className="support-sec mt-5">
                <Col md="2" lg="2">
                  <div className="support-image">
                    <img src={emailicon} alt="" />
                  </div>
                </Col>
                <Col md="8" lg="8">
                  <div className="support-text">
                    <p className="color-changetxt"> Send us a message </p>
                    <p className="simple-txt">Support@blocship.com</p>
                  </div>
                </Col>
              </Row>
              <Row className="support-sec mt-3">
                <Col md="2" lg="2">
                  <div className="support-image">
                    <img src={phoneicon} alt="" />
                  </div>
                </Col>
                <Col md="8" lg="8">
                  <div className="support-text">
                    <p className="color-changetxt"> Setup a call </p>
                    <p className="simple-txt">+1 555 555 5</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="8" md="8">
            <div className="contact-choice-section ">
              <Row>
                <Col lg="6" md="6" xs="12">
                  <div className="form-group">
                    <Label>Full Name</Label>
                    <Input placeholder="Enter Your Name" />
                  </div>
                </Col>
                <Col lg="6" md="6" xs="12">
                  <div className="form-group">
                    <Label>Email Address</Label>
                    <Input placeholder="Enter Your Email" />
                  </div>
                </Col>
                <Col lg="6" md="6" xs="12" className="mt-3">
                  <div className="form-group">
                    <Label>Company Name</Label>
                    <Input placeholder="Enter Your Company" />
                  </div>
                </Col>
                <Col lg="6" md="6" xs="12" className="mt-3">
                  <div className="form-group">
                    <Label>Services</Label>
                    <Input placeholder="Specify your budget" />
                  </div>
                </Col>
                <Col lg="12" md="12" xs="12" className="mt-3">
                  <div className="form-group">
                    <Label>Enter Your Message</Label>
                    <Input
                      type="textarea"
                      rows={4}
                      cols={40}
                      placeholder="Enter your Messgae"
                    />
                  </div>
                </Col>

                <Col lg="12" className="mt-3">
                  <Button className="btn-contact-info" color="primary">
                    Send Message To Us
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <AboutSection />

      <PremiumSection bg="#f4efef" />
      <Footer />
    </div>
  );
};

export default LongTermForm;
