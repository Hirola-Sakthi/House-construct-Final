import React, { useEffect } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Helmet } from "react-helmet-async";
import Whatsapp from "../components/home/Whatsapp";
import HowtoEstimateConstructionCostsContent from "../components/blogSingle/HowtoEstimateConstructionCostsContent";
const HowtoEstimateConstructionCosts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          How to Estimate Construction Costs in Bangalore Accurately | House
          Construct
        </title>
        <meta
          name="description"
          content="Learn how to estimate construction costs in Bangalore with House Construct. Get accurate insights on budgeting, materials, and labor for a hassle-free building process!"
          data-rh="true"
        />
      </Helmet>
      <Header />
      <HowtoEstimateConstructionCostsContent />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default HowtoEstimateConstructionCosts;
