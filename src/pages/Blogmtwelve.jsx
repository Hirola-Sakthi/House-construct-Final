import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Blogtwelve from './../components/blogSingle/Blogtwelve';
import Whatsapp from '../components/home/Whatsapp';
const Blogmtwelve = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>What to Consider Before Starting Your  House Construction Project</title>
      <meta name='description' content='Planning on building a new home? Avoid these common mistakes to ensure a smooth and successful construction process.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwelve/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwelve