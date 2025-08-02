import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Dreamhome from '../components/blogSingle/Dreamhome'
import Whatsapp from '../components/home/Whatsapp'
const Blogsnine = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>How to Choose the Right Location for Your Dream Home | House Construct</title>
      <meta name='description' content='Discover expert tips on finding the perfect location for your dream home. Ensure your investment is built on the perfect spot with House Construct.' data-rh="true" />
    </Helmet>
    <Header />
    <Dreamhome/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogsnine