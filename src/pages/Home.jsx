import React, { Fragment, useEffect } from "react";
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
import CustomerSatisfication from "../components/Home/CustomerSatisfication";
import GallerySection from "../components/Home/GallerySection";
import CitySection from "../components/Home/CitySection";
import Testimonial from "../components/Home/Testimonial";
import "aos/dist/aos.css";
import CityServiceSection from "../components/Home/CityServiceSection";

const Home = () => {
  return (
    <div className="page-home">
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
      <CitySection />
      <CityServiceSection />
      <CustomerSatisfication />
      <Testimonial />
      <GallerySection />
      <PremiumSection bg="#f4efef" />
      <Footer />
    </div>
  );
};

export default Home;
