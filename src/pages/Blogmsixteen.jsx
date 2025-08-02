import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Blogsixteen from './../components/blogSingle/Blogsixteen';
import Whatsapp from '../components/home/Whatsapp';
const Blogmsixteen = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Choosing the Right Design for Your Commercial Space</title>
      <meta name='description' content='Enhance your commercial space with the perfect design. Get expert tips on how to choose the right design that reflects your brand and creates a welcoming environment.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogsixteen/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmsixteen