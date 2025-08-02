import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import BenefitsofTurnkeyConstructionServicesContent from '../components/blogSingle/BenefitsofTurnkeyConstructionServicesContent';
const BenefitsofTurnkeyConstructionServices = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Benefits of Turnkey Construction Services for Homeowners | House Construct</title>
      <meta name='description' content='Learn how turnkey construction services by House Construct simplify home building. Save time, reduce stress, and ensure quality from design to project completion!.' data-rh="true" />
    </Helmet>
    <Header />
    <BenefitsofTurnkeyConstructionServicesContent />
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default BenefitsofTurnkeyConstructionServices