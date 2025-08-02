import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'

import Trends from '../components/blogSingle/Trends'
import Whatsapp from '../components/home/Whatsapp'
const Blogseven = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Top Commercial Construction Trends in 2024 | House Construct</title>
      <meta name='description' content='Explore the latest trends in commercial construction for 2024. Stay ahead of the competition with House Constructs  expert insights on Commercial Construction.' data-rh="true" />
    </Helmet>
    <Header />
    <Trends/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogseven