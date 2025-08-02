import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogtwentyone from '../components/blogSingle/Blogtwentyone';
const Blogmtwentyone = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Modern Kitchen Interior Design Trends in Bangalore</title>
      <meta name='description' content='Explore the latest modern kitchen interior design trends in Bangalore with House Construt—smart layouts, sleek finishes, and space-saving innovation.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogtwentyone/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmtwentyone