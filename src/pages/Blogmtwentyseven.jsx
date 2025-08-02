import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentyseven from '../components/blogSingle/Blogtwentyseven';
const Blogmtwentyseven = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>What Should You Look for in a Construction Company in Bangalore?</title>
      <meta name='description' content=': Find out what matters when selecting a construction company in Bangalore. House Construt explains how to evaluate builders for experience, pricing, and delivery.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentyseven/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentyseven