import React from "react";
import Header from "../components/Header";
import bgImg from "../assets/img/img-backg-pages.png";
import PageTitle from "../components/PageTitle";
import PremiumSection from "../components/Home/PremiumSection";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import headset from "../assets/img/headset.png";
import location from "../assets/img/location-dot.png";
import envelope from "../assets/img/envelope.png";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="page-contact-us">
      <Header />
      <PageTitle heading="Contact us" bgImg={bgImg} gap="180px 0" />
      <div className="contact-section text-center">
        <Container>
          <div className="contact-info">
            <h4 data-aos="fade-up">DROP US A LINE</h4>
            <h2 className="mb-4" data-aos="fade-up">
              Send Your Message
            </h2>
            <Row>
              <Col lg="4" md="12" xs="12" className="col-contact-1">
                <div className="contact-info-detail">
                  <div className="img-div">
                    <img src={location} />
                  </div>
                  <h5>Our Location</h5>
                  <p>
                    684 West College St. Sun City, United States America,
                    064781.
                  </p>
                  <Button color="primary">Visit Us</Button>
                </div>
              </Col>
              <Col lg="4" md="12" xs="12" className="col-contact-2">
                <div className="contact-info-detail">
                  <div className="img-div">
                    <img src={headset} />
                  </div>
                  <h5>Call Anytime</h5>
                  <ul>
                    <li>
                      <a href="#">(+55) 654 - 545 - 5418</a>
                    </li>
                    <li>
                      <a href="#">(+55) 654 - 545 - 1235</a>
                    </li>
                  </ul>
                  <Button color="primary">Enquiry</Button>
                </div>
              </Col>
              <Col lg="4" md="12" xs="12" className="col-contact-3">
                <div className="contact-info-detail">
                  <div className="img-div">
                    <img src={envelope} />
                  </div>
                  <h5>Send Email</h5>
                  <ul>
                    <li>
                      <a href="#">info@example.com</a>
                    </li>
                    <li>
                      <a href="#">info@inzofin.com</a>
                    </li>
                  </ul>
                  <Button color="primary">Email Us</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="contact-choice-section">
        <Container>
          <div className="contact-info text-center">
            <h4 data-aos="fade-up">LET CONNECT</h4>
            <h2 className="mb-4" data-aos="fade-up">
              <span>Best Choice</span> of
              <br /> Startups
            </h2>
          </div>
          <div className="extra-border">
            <div className="form-contact-section">
              <p className="text-center">
                Please fill out the form below to receive a free consultation.
                Get access to Legal, Tax and Monetary Support When you{" "}
                <a href="#">Sign up Today!</a>
              </p>
              <hr />
              <Row>
                <Col lg="6" md="6" xs="12">
                  <div className="form-group">
                    <Label>
                      Name<span className="text-danger">*</span>
                    </Label>
                    <Input placeholder="Enter Your Name" />
                  </div>
                </Col>
                <Col lg="6" md="6" xs="12">
                  <div className="form-group">
                    <Label>
                      Mobile Number<span className="text-danger">*</span>
                    </Label>
                    <Input placeholder="Enter Your Number" />
                  </div>
                </Col>
                <Col lg="6" md="6" xs="12">
                  <div className="form-group">
                    <Label>
                      Email Address<span className="text-danger">*</span>
                    </Label>
                    <Input placeholder="Enter Your Email" />
                  </div>
                </Col>
                <Col lg="6" md="6" xs="12">
                  <div className="form-group">
                    <Label>Message</Label>
                    <Input placeholder="Enter Your Message" />
                  </div>
                </Col>
                <Col lg="12" className="text-center submit-btn">
                  <Button className="btn-contact-info" color="primary">
                    Submit Form
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      <PremiumSection />
      <Footer />
    </div>
  );
};

export default ContactUs;
