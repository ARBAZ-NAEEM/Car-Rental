import React from "react";
import { Container } from "reactstrap";
import BgImgage from "../assets/img/hero_01.png";

const PageTitle = (props) => {
  const { subHeading, heading, bgImg } = props;
  return (
    <Container fluid style={{padding: 0}}>
      <div className="title-bar text-center text-light" style={{backgroundImage: `url(${BgImgage})`}}>
        {subHeading ? (
          <h4 style={{ textTransform: "uppercase" }}>{subHeading}</h4>
        ) : null}
        <h1>{heading}</h1>
      </div>
    </Container>
  );
};

export default PageTitle;
