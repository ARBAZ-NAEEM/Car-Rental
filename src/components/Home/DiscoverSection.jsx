import React, { useState } from "react";
import { Button, Card, CardFooter, Container } from "reactstrap";
import car1 from "../../assets/img/small_car.png";
import car2 from "../../assets/img/medium_car.png";
import car3 from "../../assets/img/suv_car.png";
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
    src: car1,
    key: 1,
    btnText: "Small Car",
  },
  {
    src: car2,
    key: 2,
    btnText: "Medium Car",
  },
  {
    src: car3,
    key: 3,
    btnText: "SUV Car",
  },
  {
    src: car1,
    key: 4,
    btnText: "Small Car",
  },
  {
    src: car2,
    key: 5,
    btnText: "Medium Car",
  },
];

const DiscoverSection = () => {
  return (
    <div className="discover-section">
      <Container fluid style={{ padding: 0 }}>
        <div className="discover-titlebar text-center">
          <h2 className="heading-discover" data-aos="fade-up">
            Discover
            <br />
            <span>Our Fleet</span>
          </h2>
          <p className="text-discover mt-4">
            Enterprise Rent-A-Car is the leader in car and van hire. We provide
            rental cars and vans to meet every rental need.
          </p>
        </div>
        <div className="IndicatorCarousel">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={7500}
            shouldResetAutoplay={false}
            keyBoardControl={true}
            autoPlayInterval={7500}
            interval={7500}
            transitionDuration={500}
            containerClass="carousel-container"
            //  containerClass="carousel-container justify-content-center"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            removeArrowOnDeviceType={["tablet"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            pauseOnHover={true}
          >
            {allItems?.map((items, i) => {
              return (
                <Card body key={i} className="card-discover">
                  <div className="donation-box text-center">
                    <div className="" style={{ minHeight: "280px" }}>
                      <div className="dimg-box">
                        <img src={items.src} alt="" style={{ width: "100%" }} />
                      </div>
                      <div className="dim-btn mt-5">
                        <Button color="primary"> {items.btnText} </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default DiscoverSection;
