import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Blogseventeen from '../components/blogSingle/Blogseventeen';
import Whatsapp from '../components/home/Whatsapp';
const Blogmseventeen = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Choosing the Perfect Color Scheme for Your House | House Construct</title>
      <meta name='description' content='Enhance the beauty of your house with the perfect color scheme. Discover expert tips and ideas to create a harmonious and stylish look for your home.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogseventeen/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmseventeen