import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import BlogSinglepage from '../components/blogSingle/BlogSinglepage'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp'


const Blogspage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>How to Choose the Right Floor Plan for Your Dream Home | House Construct</title>
      <meta name='description' content='Discover expert advice on selecting the perfect floor plan for your dream home in our latest blog. Let House Construct guide you through the process seamlessly.' data-rh="true" />
    </Helmet>
      <Header />
      <BlogSinglepage />
      <Whatsapp />
       <Footer />
    </>
  )
}

export default Blogspage