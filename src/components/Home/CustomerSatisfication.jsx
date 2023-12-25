import React from "react";
import { Container } from "reactstrap";

const CustomerSatisfication = () => {
  return (
    <div className="customer-section">
      <Container>
        <div className="customer-content text-light">
          <div
            className="customer-text"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3>10 Million+</h3>
            <p>Number of Satisfied Customers</p>
          </div>
          <div
            className="customer-text"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3>10+</h3>
            <p>Number of Vehicles</p>
          </div>
          <div
            className="customer-text"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3>23 Years</h3>
            <p>Years of Service</p>
          </div>
          <div
            className="customer-text"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3>79+</h3>
            <p>Number of Coffees Offered to Our Customers</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerSatisfication;
