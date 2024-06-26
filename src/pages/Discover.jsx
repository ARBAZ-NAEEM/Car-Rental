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
import Carousel from "react-multi-carousel";

import logo1 from "../assets/img/carlogo01.webp";
import logo2 from "../assets/img/carlogo02.webp";
import logo3 from "../assets/img/carlogo03.webp";
import logo4 from "../assets/img/carlogo04.webp";
import logo5 from "../assets/img/carlogo05.webp";
import logo6 from "../assets/img/carlogo06.webp";
import logo7 from "../assets/img/carlogo07.webp";
import logo8 from "../assets/img/carlogo08.webp";
import logo9 from "../assets/img/carlogo09.webp";
import logo10 from "../assets/img/carlogo10.webp";
import logo11 from "../assets/img/carlogo11.webp";

const Discover = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="page-discover">
      <Header />
      <PageTitle
        heading="Discover Malta"
        bgImg={[discover]}
        rotationInterval={2000}
        gap="180px 0"
      />
      <CitySection bg="#fff" />
      <div className="search-section">
        <Container fluid>
          <div className="search-content">
            <h4>Your recent searches</h4>
            <Row>
              <Col lg="3" md="6" xs="12">
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
              <Col lg="3" md="6" xs="12">
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
              <Col lg="3" md="6" xs="12">
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
              <Col lg="3" md="6" xs="12">
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
          <Row>
            <Col md="11" lg="11" xs="12">
              <div className="travel-content">
                <div className="travel-heading">
                  <h2 data-aos="fade-up">
                    <span>Fall into </span>travel
                  </h2>
                  <p className="mb-0">
                    Going somewhere to celebrate this season? Whether you're
                    going home or somewhere to <br /> roam, we've got the travel
                    tools to get you to your destination.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="1" lg="1" xs="12" className="display-btn-center">
              <div className="travel-btn">
                {/* <Button color="secondary">See All</Button> */}
              </div>
            </Col>
          </Row>

          <div className="travel-images-section">
            <Row>
              <Col md="12" lg="5" xs="12">
                <div className="travel-hover-heading text-light">
                  <h4>Backpacking MALTA</h4>
                  <p className="mt-3">
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
              <Col md="12" lg="7" xs="12">
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
                    <div className="travel-img tr-mg">
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
              <Col md="12" lg="6" xs="12">
                <div className="content-img ">
                  <div className="contn-mn-img text-center">
                    <img src={traveling1} />
                  </div>
                  <a href="#" className="content-contact">
                    <img src={travel1of1} />
                  </a>
                </div>
              </Col>
              <Col md="12" lg="6" xs="12">
                <div className="content-content">
                  <h2 style={{ marginBottom: 0 }} data-aos="fade-up">
                    <span>Lorem ipsum </span>
                  </h2>
                  <h2 className="dolar-color" data-aos="fade-up">
                    dolor sit amet
                  </h2>
                  <p>
                    <strong>While some providers charge $150+</strong> to file a
                    C Corp, streamlined processes enable us to offer truly free
                    C Corp formation. You only pay the mandatory, one time state
                    fee. File your C Corporation with us for free and spend your
                    valuable time on other things.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="column-reverse" style={{ alignItems: "center" }}>
              <Col md="12" lg="6" xs="12">
                <div className="content-content">
                  <h2 style={{ marginBottom: 0 }} data-aos="fade-up">
                    <span>Lorem ipsum </span>
                  </h2>
                  <h2 className="dolar-color" data-aos="fade-up">
                    dolor sit amet
                  </h2>
                  <p>
                    <strong>While some providers charge $150+</strong> to file a
                    C Corp, streamlined processes enable us to offer truly free
                    C Corp formation. You only pay the mandatory, one time state
                    fee. File your C Corporation with us for free and spend your
                    valuable time on other things.
                  </p>
                </div>
              </Col>
              <Col md="12" lg="6" xs="12">
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
      {/* <GallerySection /> */}
      <div className="logo-animated">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={true}
          customTransition="all .5"
          transitionDuration={100}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
        >
          <div>
            <img src={logo1} alt="" />
          </div>
          <div>
            <img src={logo2} alt="" />
          </div>
          <div>
            <img src={logo3} alt="" />
          </div>
          <div>
            <img src={logo4} alt="" />
          </div>
          <div>
            <img src={logo5} alt="" />
          </div>
          <div>
            <img src={logo6} alt="" />
          </div>
          <div>
            <img src={logo7} alt="" />
          </div>
          <div>
            <img src={logo8} alt="" />
          </div>
          <div>
            <img src={logo9} alt="" />
          </div>

          <div>
            <img src={logo11} alt="" />
          </div>
        </Carousel>
      </div>

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
