import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Blogfifteen from './../components/blogSingle/Blogfifteen';
import Whatsapp from '../components/home/Whatsapp';
const Blogmfifteen = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Common Interior Design Mistakes and How to Avoid Them | House Construct</title>
      <meta name='description' content='Learn how to avoid common interior design mistakes and create a beautifully designed home. House Construct provides expert tips to help you achieve your dream space.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogfifteen/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmfifteen