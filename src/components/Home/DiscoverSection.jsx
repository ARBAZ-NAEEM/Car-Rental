import React from "react";
import { Container } from "reactstrap";

const DiscoverSection = () => {
  return (
    <div className="discover-section">
      <Container>
        <div className="discover-titlebar text-center">
          <h2 className="heading-discover">
            Discover
            <br />
            <span>Our Fleet</span>
          </h2>
          <p className="text-discover mt-3">
            Enterprise Rent-A-Car is the leader in car and van hire. We provide
            rental cars and vans to meet every rental need.
          </p>
        </div>
        <div className="car-carousel"></div>
      </Container>
    </div>
  );
};

export default DiscoverSection;
