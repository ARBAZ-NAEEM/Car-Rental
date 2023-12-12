import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import bgImg from "../assets/img/hero_01.png";
import PickUpForm from "../components/Home/PickUpForm";
import PartnersSection from "../components/Home/PartnersSection";
import DiscoverSection from "../components/Home/DiscoverSection";
import CarSection from "../components/Home/CarSection";
import HowItWorks from "../components/Home/HowItWorks";
import PremiumSection from "../components/Home/PremiumSection";
import Footer from "../components/Footer";

const Home = () => {
  
  return (
    <Fragment>
      <Header />
      <PageTitle
        subHeading="Book Any Luxury Car in low price"
        heading="Car Rental"
        bgImg={bgImg}
        gap="288px 0"
      />
      <PickUpForm />
      <PartnersSection />
      <DiscoverSection />
      <CarSection />
      <HowItWorks />
      <PremiumSection />
      <div className="mt-5 mb-5"></div>
      <Footer />
    </Fragment>
  );
};

export default Home;
