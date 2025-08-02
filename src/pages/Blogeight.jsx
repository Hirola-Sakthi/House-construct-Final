import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Mistakes from '../components/blogSingle/Mistakes'
import Whatsapp from '../components/home/Whatsapp'
const  Blogeight
= () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>10 Mistakes to Avoid While Building Your New Home | House Construct</title>
      <meta name='description' content='Planning on building a new home? Avoid these common mistakes to ensure a smooth and successful construction process.' data-rh="true" />
    </Helmet>
    <Header />
    <Mistakes/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default  Blogeight
