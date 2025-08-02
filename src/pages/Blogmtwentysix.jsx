import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentysix from '../components/blogSingle/Blogtwentysix';
const Blogmtwentysix = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>What Makes House Construct Different from Other Builders?</title>
      <meta name='description' content=': Explore why House Construt stands out from other builders—innovative designs, transparent pricing, and unmatched customer satisfaction on every project.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentysix/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentysix