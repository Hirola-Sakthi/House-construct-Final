import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogthirtyfour from '../components/blogSingle/Blogthirtyfour';
const Blogmthirtyfour = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>How to Plan a Vastu-Compliant Home Layout in Chennai</title>
      <meta name='description' content=': Looking for the best construction company in Mysore? House Construct offers expert home building services with quality craftsmanship, transparent pricing, and on-time delivery.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirtyfour/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirtyfour