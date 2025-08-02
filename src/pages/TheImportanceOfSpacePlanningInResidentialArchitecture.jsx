import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import TheImportanceOfSpacePlanningInResidentialArchitectureContent from '../components/blogSingle/TheImportanceOfSpacePlanningInResidentialArchitectureContent';
import Whatsapp from '../components/home/Whatsapp';
const TheImportanceOfSpacePlanningInResidentialArchitecture = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Importance of Space Planning in Residential Architecture | House Construct</title>
      <meta name='description' content='Learn the importance of space planning in residential architecture. House Construct helps design efficient, practical, and beautiful homes tailored to your lifestyle!' data-rh="true" />
    </Helmet>
    <Header />
    <TheImportanceOfSpacePlanningInResidentialArchitectureContent />
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default TheImportanceOfSpacePlanningInResidentialArchitecture