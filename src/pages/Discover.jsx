import React from "react";
import Header from "../components/Header";
import discover from "../assets/img/discover-malta.png"
import PageTitle from "../components/PageTitle";
import CitySection from "../components/Home/CitySection";
import Footer from "../components/Footer";

const Discover = () => {
  return (
    <div className="page-discover">
      <Header />
      <PageTitle heading="Discover Malta" bgImg={discover} gap="268px 0" />
      <CitySection />
      <Footer />
    </div>
  );
};

export default Discover;
