import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";

import city1 from "../../assets/img/city1.png";
import city2 from "../../assets/img/city2.png";
import city3 from "../../assets/img/city3.png";
import city4 from "../../assets/img/city4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import groupServices from "../../assets/img/group-service.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 501 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};
const allItems = [
  {
    src: city1,
    key: 1,
    heading: "Mellieha",
    text: "10 routes to/from this city",
  },
  {
    src: city2,
    key: 2,
    heading: "popaye village",
    text: "48 routes to/from this city",
  },
  {
    src: city3,
    key: 3,
    heading: "Saint Julian's",
    text: "48 routes to/from this city",
  },
  {
    src: city1,
    key: 4,
    heading: "Mellieha",
    text: "10 routes to/from this city",
  },
  {
    src: city2,
    key: 5,
    heading: "popaye village",
    text: "48 routes to/from this city",
  },
  {
    src: city3,
    key: 6,
    heading: "Saint Julian's",
    text: "48 routes to/from this city",
  },
];
const CitySection = (props) => {
  const { bg } = props;
  return (
    <div className="main-city-section" style={{ backgroundColor: bg }}>
      <div className="section-city">
        <Container fluid style={{ padding: 0 }}>
          <div className="city-titlebar text-center">
            <h2
              className="heading-discover heading-city"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              City To City
              <br />
              <span>Routes</span>
            </h2>
          </div>
          <div className="carousel-city">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              //   autoPlay={true}
              autoPlaySpeed={7500}
              shouldResetAutoplay={false}
              keyBoardControl={true}
              autoPlayInterval={7500}
              interval={7500}
              transitionDuration={500}
              containerClass="carousel-container"
              //  containerClass="carousel-container justify-content-center"
              //   removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]}
              removeArrowOnDeviceType={["tablet"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              pauseOnHover={true}
            >
              {allItems?.map((items, i) => {
                return (
                  <div key={i} className="route-box ">
                    <div className="dimg-box">
                      <img src={items.src} alt="" style={{ width: "100%" }} />
                      <div className="route-content">
                        <div>
                          <h5>{items.heading}</h5>
                          <p className="mb-0">{items.text}</p>
                        </div>
                        <a href="#" style={{ color: "#EE333A" }}>
                          <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Container>
      </div>
      {/* <div className="services-section">
        <Container>
          <div className="services-get">
            <Row className="align-items-center">
              <Col md="6" lg="6" xs="12">
                <div className="servs-img">
                  <img src={groupServices} alt="" style={{ width: "100%" }} />
                </div>
              </Col>
              <Col md="6" lg="6" xs="12">
                <div className="service-content">
                  <h5>Get to know us</h5>
                  <h3
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="6000"
                  >
                    Services with a Wide Range of Cars
                  </h3>
                  <h5>
                    committed to providing our customers with exceptional
                    service.
                  </h5>
                  <p className="mb-3">
                    Lorem ipsum is simply ipun txns mane so dummy text of free
                    available in market the printing and typesetting industry
                    has been the industry's standard dummy text ever.
                  </p>
                  <ul className="service-menu">
                    <li>Many Pickup Locations</li>
                    <li>Offering Low Prices</li>
                    <li>News & Luxury Cars</li>
                    <li>Trusted Rental Service</li>
                  </ul>
                  <Button
                    color="primary"
                    className="mt-1"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    Discover More
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div> */}
    </div>
  );
};

export default CitySection;
