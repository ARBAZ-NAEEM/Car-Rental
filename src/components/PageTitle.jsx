import React from "react";
import { Container } from "reactstrap";

const PageTitle = (props) => {
  const { subHeading, heading, bgImg, gap } = props;
  return (
    <div
      className="title-bar text-center text-light"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        padding: gap,
        backgroundPosition: "center",
      }}
    >
      <Container>
        {subHeading ? (
          <h4
            className="mb-0 subHeading"
            style={{ textTransform: "uppercase" }}
          >
            {subHeading}
          </h4>
        ) : null}
        <h1 className="mb-0">
          <span>{heading}</span>
        </h1>
      </Container>
    </div>
  );
};

export default PageTitle;
