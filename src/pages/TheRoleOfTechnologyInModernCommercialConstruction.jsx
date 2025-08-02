import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import TheRoleOfTechnologyInModernCommercialConstructionContent from '../components/blogSingle/TheRoleOfTechnologyInModernCommercialConstructionContent';
import Whatsapp from '../components/home/Whatsapp';
const TheRoleOfTechnologyInModernCommercialConstruction = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Role of Technology in Modern Commercial Construction | House Construct</title>
      <meta name='description' content='Learn how House Construct leverages advanced technology to boost efficiency, cut costs, and improve the quality of modern commercial construction projects' data-rh="true" />
    </Helmet>
    <Header />
    <TheRoleOfTechnologyInModernCommercialConstructionContent />
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default TheRoleOfTechnologyInModernCommercialConstruction