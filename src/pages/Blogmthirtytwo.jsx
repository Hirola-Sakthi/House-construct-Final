import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogthirtytwo from '../components/blogSingle/Blogthirtytwo';
const Blogmthirtytwo = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Top Reasons to Hire a Professional Construction Company in Chennai</title>
      <meta name='description' content=': Hiring a professional construction company in Chennai guarantees expert craftsmanship, cost efficiency, and hassle-free project execution. Learn more with House Construct.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirtytwo/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirtytwo