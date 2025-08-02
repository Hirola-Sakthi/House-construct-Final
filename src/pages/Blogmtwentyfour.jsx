import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentyfour from '../components/blogSingle/Blogtwentyfour';
const Blogmtwentyfour = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Top Mistakes to Avoid While Choosing a Builder in Bangalore</title>
      <meta name='description' content='Choosing a builder in Bangalore? Learn the top mistakes to avoid from House Construt—protect your budget, timeline, and vision with smart, expert advice.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentyfour/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentyfour