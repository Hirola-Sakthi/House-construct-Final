import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogthirtyeight from '../components/blogSingle/Blogthirtyeight';
const Blogmthirtyeight = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title> Why Location Matters When Building a Home in Bangalore or Chennai</title>
      <meta name='description' content=':  Building a home in Bangalore or Chennai? House Construct explains why choosing the right location impacts property value, convenience, lifestyle, and long-term satisfaction.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirtyeight/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirtyeight