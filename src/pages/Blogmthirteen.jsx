import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Blogthirteen from './../components/blogSingle/Blogthirteen';
import Whatsapp from '../components/home/Whatsapp';
const Blogmthirteen = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>How to Ensure Safety on a Construction Site | House Construct</title>
      <meta name='description' content='Learn how to prioritize safety on your construction site. House Construct provides guidelines, tips, and best practices for maintaining a safe working environment.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirteen/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirteen