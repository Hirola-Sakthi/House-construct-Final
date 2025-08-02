import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogsnineteen from '../components/blogSingle/Blogsnineteen';
const Blogmnineteen = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Affordable House Construction Tips for Bangalore in 2025</title>
      <meta name='description' content='Looking to build in 2025? Get expert, budget-friendly house construction tips for Bangalore from House Construt—smart planning, material savings, and more.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogsnineteen/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmnineteen