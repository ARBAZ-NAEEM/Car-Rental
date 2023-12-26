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
import bussiness from "../assets/img/business.png";
import emailIcon from "../assets/img/email-icon.png";
import phoneIcon from "../assets/img/phone-icon.png";

const LongTermForm = () => {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6884.647678747011!2d14.462037859355188!3d35.89546231748722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1703575125043!5m2!1sen!2s" width="100%" height="400" style="border:0; border-radius: 10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

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
      <div className="section-bussiness">
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col md="6" lg="6" xs="12">
              <div className="business-img ">
                <div
                  className="business-mn-img text-right"
                  style={{ textAlign: "right" }}
                >
                  <img src={bussiness} />
                </div>
              </div>
            </Col>
            <Col md="6" lg="6" xs="12">
              <div className="content-content">
                <h2>
                  <span>business </span> <br /> solutions
                </h2>
                <p>
                  <strong>While some providers charge $150+</strong> to file a C
                  Corp, streamlined processes enable us to offer truly free C
                  Corp formation. You only pay the mandatory, one time state
                  fee. File your C Corporation with us for free and spend your
                  valuable time on other things.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-contact-long">
        <Container>
          <Row>
            <Col lg="5" md="5" xs="12">
              <div className="inner-contact-long">
                <h2>Contact us</h2>
                <ul>
                  <li>
                    <img src={emailIcon} />
                  </li>
                  <li>
                    <div className="msg-contct">
                      <p className="mb-0">Send us a message</p>
                      <h4 className="mb-0">Support@blocship.com</h4>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src={phoneIcon} />
                  </li>
                  <li>
                    <div className="msg-contct">
                      <p className="mb-0">Setup a call</p>
                      <h4 className="mb-0">+1 555 555 5</h4>
                    </div>
                  </li>
                </ul>
                <div className="footer-contact">
                  <input className="footer-field" placeholder="Write a message" />
                  <Button color="primary" className="footer-submit">
                    SEND MESSAGE
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-visit">
        <Container>
          <div className="inner-visit text-center">
            <h2>
              <span>Visit</span> us Now
            </h2>
            <Iframe iframe={iframe} />
          </div>
        </Container>
      </div>
      <PremiumSection bg="#f4efef" />
      <Footer />
    </div>
  );
};

export default LongTermForm;
