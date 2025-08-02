import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import BestMaterialForSustainableHouseContent from '../components/blogSingle/BestMaterialForSustainableHouseContent';
import Whatsapp from '../components/home/Whatsapp';
const BestMaterialForSustainableHouse = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>How to Select the Best Materials for a Sustainable Home | House Construct</title>
      <meta name='description' content='Build a sustainable home with eco-friendly, durable materials at House Construct for long-term value and environmental responsibility' data-rh="true" />
    </Helmet>
    <Header />
    <BestMaterialForSustainableHouseContent />
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default BestMaterialForSustainableHouse