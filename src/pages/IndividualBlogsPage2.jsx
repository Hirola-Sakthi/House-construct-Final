import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import ConstructionandDesign from '../components/blogSingle/ConstructionandDesign'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp'

const IndividualBlogsPage2 = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
      

  return (
    <>
    <Helmet>
      <title>Top Trends in Home Construction and Design for 2023 | House Construct</title>
      <meta name='description' content='Discover the latest trends in home construction and design for 2023. Stay ahead with House Construct as we unveil innovative ideas shaping the future of living.' data-rh="true" />
    </Helmet>
    <Header />
    <ConstructionandDesign/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default IndividualBlogsPage2