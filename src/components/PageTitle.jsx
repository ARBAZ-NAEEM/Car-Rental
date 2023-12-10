import React from "react";
import { Container } from "reactstrap";

const PageTitle = (props) => {
  const { subHeading, heading, bgImg, gap } = props;
  return (
    <Container fluid style={{ padding: 0 }}>
      <div
        className="title-bar text-center text-light"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", padding: gap }}
      >
        {subHeading ? (
          <h4 className="mb-0" style={{ textTransform: "uppercase" }}>{subHeading}</h4>
        ) : null}
        <h1 className="mb-0"><span>{heading}</span></h1>
      </div>
    </Container>
  );
};

export default PageTitle;
