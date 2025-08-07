import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogthirty from '../components/blogSingle/Blogthirty';
const Blogmthirty = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Thinking of Building a Home in Mysore? Here’s Your Starter Guide</title>
      <meta name='description' content=': Dreaming of building a home in Mysore? House Construct’s starter guide covers planning, design ideas, and expert advice to simplify your home construction journey. ' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirty/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirty