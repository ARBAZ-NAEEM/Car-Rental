import React from "react";
import { Container } from "reactstrap";

const AboutSection = (props) => {
  const { bg } = props;
  return (
    <div className="about-section" style={{ backgroundColor: bg }}>
      <Container fluid style={{ padding: 0 }}>
        <div className="about-us-content text-center text-light">
          <h2 className="heading1">
            We are proud to be the only <br /> true global rental car company,
          </h2>
          <h2 className="heading2">
            providing quality car rental <br /> service for over 90 years.
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
