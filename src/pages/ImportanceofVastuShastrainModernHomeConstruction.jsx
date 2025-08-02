import React, { useEffect } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Helmet } from "react-helmet-async";
import Whatsapp from "../components/home/Whatsapp";
import ImportanceofVastuShastrainModernHomeConstructionContent from "../components/blogSingle/ImportanceofVastuShastrainModernHomeConstructionContent";
const ImportanceofVastuShastrainModernHomeConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Importance of Vastu Shastra in Modern Home Construction | House
          Construct
        </title>
        <meta
          name="description"
          content="Learn how Vastu Shastra influences modern home construction. House Construct helps you design homes with positive energy, balance, and enhanced well-being!"
          data-rh="true"
        />
      </Helmet>
      <Header />
      <ImportanceofVastuShastrainModernHomeConstructionContent />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default ImportanceofVastuShastrainModernHomeConstruction;
