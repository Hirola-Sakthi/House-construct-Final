import React, { useEffect } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Helmet } from "react-helmet-async";
import Whatsapp from "../components/home/Whatsapp";
import BestColorCombinationsforHomeInteriorDesignContent from "../components/blogSingle/BestColorCombinationsforHomeInteriorDesignContent";
const BestColorCombinationsforHomeInteriorDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Best Color Combinations for Home Interior Design in Bangalore
        </title>
        <meta
          name="description"
          content="Find the perfect color combinations for your home in Bangalore. Get expert tips from House Construct to make your space stylish, cozy, and beautiful!"
          data-rh="true"
        />
      </Helmet>
      <Header />
      <BestColorCombinationsforHomeInteriorDesignContent />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default BestColorCombinationsforHomeInteriorDesign;
