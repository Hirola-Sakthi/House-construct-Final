/* eslint-disable no-unused-vars */
// import React from 'react'
// import Header from '../components/home/Header';
// import PortfolioBanner from '../components/PortfolioIndividual/PortfolioBanner'
// import PortfolioIndividualContent from '../components/PortfolioIndividual/PortfolioIndividualContent'
// import Footer from '../components/home/Footer';

// const PortfolioIndividual = () => {
//   return (
//     <>
//     <Header/>
//     <PortfolioBanner/>
//     <PortfolioIndividualContent/>
//     <Footer/>
//     </>

//   )
// }

// export default PortfolioIndividual
import React, { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import PortfolioBanner from '../components/PortfolioIndividual/PortfolioBanner';
import PortfolioIndividualContent from '../components/PortfolioIndividual/PortfolioIndividualContent';
import Footer from '../components/home/Footer';
import projectData from '../assets/data/projects.json'; // Import project data
import { Modal } from 'antd';
import PortfolioGallery from '../components/PortfolioIndividual/PortfolioGallery';
import PortfolioRelatedProjects from '../components/PortfolioIndividual/PortfolioRelatedProjects';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { Helmet } from 'react-helmet-async';
import Whatsapp from '../components/home/Whatsapp';

const PortfolioIndividual = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [location, setLocation] = useState("")
  const [selectedProject, setSelectedProject] = useState(projectData? projectData : null)

  const [URLChange, setURLChange] = useState(false)

  console.log("reRender",location)

  const slug=useParams();
  useEffect(()=>{
    const location = window.location.pathname
    setLocation(location.slice(11))
    
  },[location.pathname,URLChange])
  console.log("first",slug);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[URLChange])

  useEffect(() => {
    const modalShownBefore = localStorage.getItem('modalShown');

    if (!modalShownBefore) {
      // Show modal after 5 seconds for the initial visit
      const timer = setTimeout(() => {
        setVisibleModal(true);
        // Set flag in localStorage to indicate modal has been shown
        localStorage.setItem('modalShown', 'true');
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      // Show modal after 10 seconds on subsequent visits
      const timer = setTimeout(() => {
        setVisibleModal(true);
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, [URLChange]);

  const handleModalClose = () => {
    setVisibleModal(false);
  };
  // Assuming you have a way to determine the selected project from the URL or other means


  useEffect(()=>{
    setSelectedProject(projectData)
    // window.location.reload()
  },[URLChange])
  console.log("projectData",projectData)

  const slugifyTitle = (title) => {
    return slugify(title, { lower: true, replacement: '-', remove: /[*+~.()'"!:@]/g }) + "-new";
};
  // const selectedProject = projectData; // Assuming the first project is selected, you might replace this with your logic
  // console.log("selectedProject", selectedProject)
  return (
    <>
    {selectedProject?.filter(item=> slugifyTitle(item?.title) === location)?.map(project => 
    <Helmet>
      <title>{project?.metatitle}</title>
      <meta name='description' content={project?.metadescription} data-rh="true" />
    </Helmet>
    )}
            <Modal
        title=""
        visible={visibleModal}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        className='cautious-title'
        footer={null}
      >

        <div className=" dataform">
          <div className='banner-form-services'>
          <div className="contactUs-banner-form">
               <div className="contactUs-banner-form-sub">
               <h2 className="text-center">Why wait?</h2>
                <h4 className="text-center">Start building your dream home today!</h4>
                <h5 className="text-center"><strong>"Get free vaastu consultation"</strong></h5>
                <form action="">
                  <input type="text" placeholder="Your Name*" /><br />
                  <input type="tele" placeholder="Mobile Number*"/><br />
                  <input type="email" placeholder="Email ID*"/><br />
                  <input type="text" placeholder="Plot Location"/><br />
                  <input type="text" placeholder="Plot Size"/><br />
                  <button><Link>Submit</Link></button>
                </form>
               </div>
              </div>
          </div>
        </div>
        {/* <strong id='scam-tt' >Hirola Infotech Solutions</strong> */}
      </Modal>
      <Header />
      <PortfolioBanner  project={selectedProject} location={location}/>
      {/* Pass the selected project as props to PortfolioIndividualContent */}
      <PortfolioIndividualContent project={selectedProject} location={location}/>
      <PortfolioGallery project={selectedProject} location={location}/>
      <PortfolioRelatedProjects setURLChange={setURLChange}/>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default PortfolioIndividual;
