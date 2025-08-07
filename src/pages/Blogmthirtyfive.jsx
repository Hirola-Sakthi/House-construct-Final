import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogthirtyfive from '../components/blogSingle/Blogthirtyfive';
const Blogmthirtyfive = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>What Is Turnkey House Construction and Is It Right for You?</title>
      <meta name='description' content=': Turnkey house construction simplifies your home-building journey with end-to-end solutions. Discover how House Construct makes it seamless, efficient, and cost-effective.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirtyfive/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirtyfive