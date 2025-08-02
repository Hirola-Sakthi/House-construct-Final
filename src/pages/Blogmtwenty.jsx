import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwenty from '../components/blogSingle/Blogtwenty';
const Blogmtwenty = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>How Turnkey Home Construction Reduces Stress for Bangalore Families</title>
      <meta name='description' content='Learn how turnkey home construction reduces stress for Bangalore families. House Construt handles every detail—from design to delivery—for a worry-free experience.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwenty/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwenty