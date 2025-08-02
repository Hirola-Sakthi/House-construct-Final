import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Blogeighteens from './../components/blogSingle/Blogeighteens';
import Whatsapp from '../components/home/Whatsapp';
const Blogmeighteens = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Modern Interior Design Ideas for Any Space | House Construct</title>
      <meta name='description' content='Discover the latest modern interior design ideas for any space. Transform your home with House Construct s expert tips and inspirations.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogeighteens/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmeighteens