import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogthirtyseven from '../components/blogSingle/Blogthirtyseven';
const Blogmthirtyseven = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>When Is the Best Time to Start House Construction in Bangalore?</title>
      <meta name='description' content=': Planning house construction in Bangalore? House Construct explains the best seasons to start building, considering weather, costs, and project timelines for smooth execution.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirtyseven/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirtyseven