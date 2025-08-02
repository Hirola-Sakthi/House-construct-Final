import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Blogfourteen from './../components/blogSingle/Blogfourteen';
import Whatsapp from '../components/home/Whatsapp';
const Blogmfourteen = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Top 10 Home Interior Design Trends You Need to Know | House Construct</title>
      <meta name='description' content='Stay ahead of the curve with House Construct s guide to the top 10 home interior design trends. Discover the latest styles and transform your space.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogfourteen/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmfourteen