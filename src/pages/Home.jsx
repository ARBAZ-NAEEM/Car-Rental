import React, { Fragment } from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import bgImg from "../assets/img/hero_01.png";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle
        subHeading="Book Any Luxury Car in low price"
        heading="Car Rental"
        bgImg={bgImg}
        gap="325px 0"
      />
    </Fragment>
  );
};

export default Home;
