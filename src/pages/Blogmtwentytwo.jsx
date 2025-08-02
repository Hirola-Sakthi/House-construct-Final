import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentytwo from '../components/blogSingle/Blogtwentytwo';
const Blogmtwentytwo = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Modern Living Room Interior Ideas for Compact Bangalore Homes</title>
      <meta name='description' content='House Construt reveals the best modern interior ideas for compact living rooms in Bangalore—functional layouts, light colors, and space-saving furniture.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentytwo/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentytwo