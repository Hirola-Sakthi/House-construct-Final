import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Residentialcommercial from '../components/blogSingle/Residentialcommercial'
import Whatsapp from '../components/home/Whatsapp'
const Blogsix
= () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Difference Between Residential and Commercial Construction | House Construct</title>
      <meta name='description' content='Discover the key contrasts between residential and commercial construction. Learn how House Construct can help you navigate these unique building processes.' data-rh="true" />
    </Helmet>
    <Header />
    <Residentialcommercial/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogsix
