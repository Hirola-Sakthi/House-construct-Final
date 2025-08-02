import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentyeight from '../components/blogSingle/Blogtwentyeight';
const Blogmtwentyeight = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Why House Construct is Bangalore’s Trusted Home Building Partner</title>
      <meta name='description' content='Discover why House Construt is Bangalore’s trusted home building partner—delivering quality construction, on-time delivery, and personalized service you can count on.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentyeight/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentyeight