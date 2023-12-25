import React from "react";
import { Card, CardFooter, Col, Container, Row } from "reactstrap";
import star from "../../assets/img/star.png";
import client1 from "../../assets/img/test1.png";
import client2 from "../../assets/img/test2.png";
import client3 from "../../assets/img/test3.png";
import quote from "../../assets/img/quotes.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    src: client1,
    key: 1,
    text: "Kenvin Martin",
  },
  {
    src: client2,
    key: 2,
    text: "Mike hardson",
  },
  {
    src: client3,
    key: 3,
    text: "Jessica Brown",
  },
  {
    src: client1,
    key: 4,
    text: "Kenvin Martin",
  },
  {
    src: client2,
    key: 5,
    text: "Mike hardson",
  },
  {
    src: client3,
    key: 6,
    text: "Jessica Brown",
  },
];
const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Container>
        <div className="our-testimonials">
          <div className="testimonials-heading">
            <Row>
              <Col lg="6" md="6" xs="12">
                <div
                  className="test-content"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h4>Our testimonials</h4>
                  <h3 className="heading-discover heading-test">
                    What They're Talking <br />
                    <span>About Queen</span>
                  </h3>
                </div>
              </Col>
              <Col lg="6" md="6" xs="12">
                <div className="test-content">
                  <p>
                    Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse
                    suscipit sagitis leo sit.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="IndicatorCarousel">
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
                removeArrowOnDeviceType={[
                  "superLargeDesktop",
                  "desktop",
                  "tablet",
                  "mobile",
                ]}
                // removeArrowOnDeviceType={["tablet"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                pauseOnHover={true}
              >
                {allItems?.map((items, i) => {
                  return (
                    <Card key={i} body className="card-client">
                      <div className="testimonials-client text-center">
                        <img src={quote} className="img-quote" alt="" />
                        <p>
                          I was very impresed by the remons service lorem ipsum
                          is simply free text used by copy typing refreshing.
                          Neque porro est qui dolorem ipsum quia.
                        </p>
                        <img src={star} alt="" />
                      </div>
                      <div className="client-view">
                        <img src={items.src} alt="" />
                        <div>
                          <p className="mb-0">{items.text}</p>
                          <span>Customer</span>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
