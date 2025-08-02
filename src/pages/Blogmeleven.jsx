import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async';
import Blogelevens from '../components/blogSingle/Blogelevens';
import Whatsapp from '../components/home/Whatsapp';

const Blogmeleven = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>How to Select the Right Floor Plan for Your Family’s Needs | House Construct</title>
      <meta name='description' content='Find the perfect floor plan for your family s needs with House Construct. Explore our wide range of options and create your dream home.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogelevens/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmeleven;