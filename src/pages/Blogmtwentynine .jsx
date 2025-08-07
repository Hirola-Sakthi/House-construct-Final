import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentynine from '../components/blogSingle/Blogtwentynine';
const Blogmtwentynine = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Best Construction Company in Mysore for Hassle-Free Home Building</title>
      <meta name='description' content='Looking for the best construction company in Mysore? House Construct offers expert home building services with quality craftsmanship, transparent pricing, and on-time delivery.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentynine/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentynine