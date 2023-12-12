import React from "react";
import { Button, Container } from "reactstrap";

const PremiumSection = () => {
  return (
    <div className="section-premium text-light">
      <Container>
        <div className="inner-section-premium text-end">
          <p className="mb-0">Faster, easier access to car rental services</p>
          <h3 className="mb-0">Premium Car Rental</h3>
          <Button color="primary">Lets Ride With us</Button>
        </div>
      </Container>
    </div>
  );
};

export default PremiumSection;
