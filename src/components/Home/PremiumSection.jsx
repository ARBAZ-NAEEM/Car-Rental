import React from "react";
import { Button, Container } from "reactstrap";

const PremiumSection = () => {
  return (
    <div className="section-premium text-light">
      <Container>
        <div className="inner-section-premium text-end">
          <p className="mb-0" data-aos="fade-right" data-aos-duration="3000">
            Faster, easier access to car rental services
          </p>
          <h3 className="mb-0" data-aos="fade-right" data-aos-duration="2000">
            Premium Car Rental
          </h3>
          <Button
            color="primary"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Lets Ride With us
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PremiumSection;
