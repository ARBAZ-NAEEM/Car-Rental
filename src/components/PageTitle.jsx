import React from "react";
import { Container } from "reactstrap";

const PageTitle = (props) => {
  const { subHeading, heading, bgImg } = props;
  return (
    <Container>
      <div className="title-bar text-center">
        {subHeading ? (
          <h5 style={{ textTransform: "uppercase" }}>{subHeading}</h5>
        ) : null}
        <h1>{heading}</h1>
      </div>
    </Container>
  );
};

export default PageTitle;
