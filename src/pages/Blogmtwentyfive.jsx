import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentyfive from '../components/blogSingle/Blogtwentyfive';
const Blogmtwentyfive = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Turnkey vs. Contract-Based Construction – What Works Best in Bangalore?</title>
      <meta name='description' content='Explore turnkey vs. contract-based construction in Bangalore. House Construt breaks down costs, control, and convenience to help you choose what works best.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentyfive/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentyfive