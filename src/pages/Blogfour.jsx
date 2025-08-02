
import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import BlogLocationforyour from '../components/blogSingle/BlogLocationforyour'
import Whatsapp from '../components/home/Whatsapp'
const Blogfour = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>The Role of Architectural Design in Creating Sustainable Homes | House Construct</title>
      <meta name='description' content='Explore the pivotal role of architectural design in crafting sustainable homes. Learn how House Construct integrates eco-friendly principles for a greener future.' data-rh="true" />
    </Helmet>
    <Header />
    <BlogLocationforyour/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogfour