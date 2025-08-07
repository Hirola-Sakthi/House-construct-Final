import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/home/Whatsapp';
import Blogthirtysix from '../components/blogSingle/Blogthirtysix';
const Blogmthirtysix = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>What to Expect During Each Stage of House Construction in Bangalore</title>
      <meta name='description' content=': Planning house construction in Bangalore? Learn what to expect at every stage—from design and approvals to foundation, structure, and finishing with House Construct’s expert guide.' data-rh="true" />
    </Helmet>
    <Header />
    <Blogthirtysix/>
    <Whatsapp />
    <Footer/>
    </>
  )
}

export default Blogmthirtysix