import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import HowToDesignMultiFunctionalSpacesInYourHomeContent from '../components/blogSingle/HowToDesignMultiFunctionalSpacesInYourHomeContent';
import Whatsapp from '../components/home/Whatsapp';
const HowToDesignMultiFunctionalSpacesInYourHome = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>How to Design Multi-Functional Spaces in Your Home | House Construct</title>
      <meta name='description' content='Learn how to design multi-functional spaces in your home with House Construct. Discover tips to maximize space, enhance functionality, and create versatile living areas.' data-rh="true" />
    </Helmet>
    <Header />
    <HowToDesignMultiFunctionalSpacesInYourHomeContent />
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default HowToDesignMultiFunctionalSpacesInYourHome