import React, { Fragment } from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle 
      subHeading="Book Any Luxury Car in low price"
      heading="Car Rental"
      />
    </Fragment>
  );
};

export default Home;
