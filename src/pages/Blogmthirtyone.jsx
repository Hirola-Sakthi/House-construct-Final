import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogthirtyone from '../components/blogSingle/Blogthirtyone';
const Blogmthirtyone = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Top Home Design Trends in Chennai You Should Know About</title>
      <meta name='description' content=': Explore top home design trends in Chennai for 2025 with House Construct. Get inspired by innovative interiors, smart layouts, and sustainable living ideas.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirtyone/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirtyone