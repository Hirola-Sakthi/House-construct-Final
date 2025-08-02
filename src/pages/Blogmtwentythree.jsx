
import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentythree from '../components/blogSingle/Blogtwentythree';
const Blogmtwentythree = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Top 10 Questions to Ask Your Home Builder Before You Sign the Contract</title>
      <meta name='description' content='Before signing a contract, ask your builder these 10 essential questions. House Construt helps Bangalore homeowners make informed, stress-free building decisions.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentythree/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentythree