import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Rightconstruction from '../components/blogSingle/Rightconstruction'
import Whatsapp from '../components/home/Whatsapp'
const Blogfive = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Choose the Right Construction Company for Your project | House Construct</title>
      <meta name='description' content='Looking for a reliable construction company? House Construct offers expert services to ensure your project is a success. Find the perfect for your construction needs."' data-rh="true" />
    </Helmet>
    <Header />
    <Rightconstruction/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogfive