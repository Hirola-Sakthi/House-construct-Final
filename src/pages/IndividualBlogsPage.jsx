import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import ArchitecturalDesign from '../components/blogSingle/ArchitecturalDesign'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp'
const IndividualBlogsPage = () => {
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
    <ArchitecturalDesign/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default IndividualBlogsPage