import React from "react";
import Header from "../components/Header";
import discover from "../assets/img/discover-malta.png";
import PageTitle from "../components/PageTitle";
import CitySection from "../components/Home/CitySection";
import Footer from "../components/Footer";
import { Button, Col, Container, Row } from "reactstrap";
import carImg from "../assets/img/ezgif.png";
import travel1 from "../assets/img/travel1.png";
import travel2 from "../assets/img/travel2.png";
import travel3 from "../assets/img/travel3.png";
import travel4 from "../assets/img/travel4.png";
import traveling1 from "../assets/img/traveling1.png";
import travel1of1 from "../assets/img/traveling1-1.png";
import traveling2 from "../assets/img/traveling2.png";
import travel2of1 from "../assets/img/traveling2-1.png";
import GallerySection from "../components/Home/GallerySection";
import PremiumSection from "../components/Home/PremiumSection";
import PickUpForm from "../components/Home/PickUpForm";
import Faq from "../components/Fleet/Faq";

const Discover = () => {
  return (
    <div className="page-discover">
      <Header />
      <PageTitle heading="Discover Malta" bgImg={discover} gap="180px 0" />
      <CitySection bg="#fff" />
      <div className="search-section">
        <Container fluid>
          <div className="search-content">
            <h4>Your recent searches</h4>
            <Row>
              <Col lg="3" md="3" xs="6">
                <div className="search-content-info d-flex">
                  <div className="search-img">
                    <img src={carImg} />
                  </div>
                  <div>
                    <p className="mb-0">Toyota Aygo</p>
                    <small>325 cars</small>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="3" xs="6">
                <div className="search-content-info d-flex">
                  <div className="search-img">
                    <img src={carImg} />
                  </div>
                  <div>
                    <p className="mb-0">Toyota Aygo</p>
                    <small>325 cars</small>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="3" xs="6">
                <div className="search-content-info d-flex">
                  <div className="search-img">
                    <img src={carImg} />
                  </div>
                  <div>
                    <p className="mb-0">Toyota Aygo</p>
                    <small>325 cars</small>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="3" xs="6">
                <div className="search-content-info d-flex">
                  <div className="search-img">
                    <img src={carImg} />
                  </div>
                  <div>
                    <p className="mb-0">Toyota Aygo</p>
                    <small>325 cars</small>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="section-travel">
        <Container>
          <div className="travel-content">
            <div className="travel-heading">
              <h2>
                <span>Fall into </span>travel
              </h2>
              <p className="mb-0">
                Going somewhere to celebrate this season? Whether you're going
                home or somewhere to roam, we've got the travel tools to get you
                to your destination.
              </p>
            </div>
            <div className="travel-btn">
              <Button color="secondary">See All</Button>
            </div>
          </div>
          <div className="travel-images-section">
            <Row>
              <Col md="5" lg="5" xs="12">
                <div className="travel-hover-heading text-light">
                  <h4>Backpacking MALTA</h4>
                  <p>
                    Traveling is a unique experience as it's the best way to
                    unplug from the pushes and pulls of daily life. It helps us
                    to forget about our problems, frustrations, and fears at
                    home. During our journey, we experience life in different
                    ways. We explore new places, cultures, cuisines, traditions,
                    and ways of living.
                  </p>
                  <Button color="secondary">Rent Car</Button>
                </div>
              </Col>
              <Col md="7" lg="7" xs="12">
                <Row>
                  <Col lg="6" md="6" xs="12">
                    <div className="travel-img">
                      <img src={travel1} style={{ width: "100%" }} />
                    </div>
                    <div className="travel-img">
                      <img src={travel3} style={{ width: "100%" }} />
                    </div>
                  </Col>
                  <Col lg="6" md="6" xs="12">
                    <div className="travel-img">
                      <img src={travel2} style={{ width: "100%" }} />
                    </div>
                    <div className="travel-img">
                      <img src={travel4} style={{ width: "100%" }} />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="content-section">
        <Container>
          <div className="content-text-inner">
            <Row style={{ alignItems: "center", marginBottom: "100px" }}>
              <Col md="6" lg="6" xs="12">
                <div className="content-img ">
                  <div className="contn-mn-img text-center">
                    <img src={traveling1} />
                  </div>
                  <a href="#" className="content-contact">
                    <img src={travel1of1} />
                  </a>
                </div>
              </Col>
              <Col md="6" lg="6" xs="12">
                <div className="content-content">
                  <h2>
                    <span>Lorem ipsum </span> <br /> dolor sit amet
                  </h2>
                  <p>
                    While some providers charge $150+ to file a C Corp,
                    streamlined processes enable us to offer truly free C Corp
                    formation. You only pay the mandatory, one time state fee.
                    File your C Corporation with us for free and spend your
                    valuable time on other things.
                  </p>
                </div>
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col md="6" lg="6" xs="12">
                <div className="content-content">
                  <h2>
                    <span>Lorem ipsum </span> <br /> dolor sit amet
                  </h2>
                  <p>
                    While some providers charge $150+ to file a C Corp,
                    streamlined processes enable us to offer truly free C Corp
                    formation. You only pay the mandatory, one time state fee.
                    File your C Corporation with us for free and spend your
                    valuable time on other things.
                  </p>
                </div>
              </Col>
              <Col md="6" lg="6" xs="12">
                <div className="content-img ">
                  <div className="contn-mn-img text-center">
                    <img src={traveling2} />
                  </div>
                  <a href="#" className="content-contact">
                    <img src={travel2of1} />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <GallerySection />
      <Faq />
      <PremiumSection />
      <PickUpForm btnText="Change" boxShadow="5px 5px 5px #ccc" />
      <div className="text-center btn-lease-discover">
        <Button color="primary" data-aos="fade-up">
          Long Term Lease
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
