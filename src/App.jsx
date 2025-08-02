/* eslint-disable no-unused-vars */
import React from 'react'
import './assets/sass/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import PortfolioIndividual from './pages/PortfolioIndividual';
import HouseFloorPlans from './pages/HouseFloorPlans';

import ServicePage from './pages/ServicePage';
import Portfolio from './pages/Portfolio';
import Blogspage from './pages/Blogspage';
import Contactus from './pages/Contactus';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import VerticalStepperForm from './Sample';
import IndividualBlogsPage from './pages/IndividualBlogsPage';
import IndividualBlogsPage2 from './pages/IndividualBlogsPage2';
import CommercialConstruction from './pages/CommercialConstruction';
import TermsandCondition from './pages/TermsandCondition';
import Cancellation from './pages/Cancellation';
import Careers from './pages/Careers';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import BlogLocationforyour from './components/blogSingle/BlogLocationforyour';
import Rightconstruction from './components/blogSingle/Rightconstruction';
import Residentialcommercial from './components/blogSingle/Residentialcommercial';
import Trends from './components/blogSingle/Trends';
import Mistakes from './components/blogSingle/Mistakes';
import Dreamhome from './components/blogSingle/Dreamhome';
import Blogfour from './pages/Blogfour';
import Blogfive from './pages/Blogfive';
import Blogsix from './pages/Blogsix';
import Blogseven from './pages/Blogseven';
import Blogeight from './pages/Blogeight';
import Blogsnine from './pages/Blogsnine';
import Blogmeleven from './pages/Blogmeleven';
import Blogmtwelve from './pages/Blogmtwelve';
import Blogmthirteen from './pages/Blogmthirteen';
import Blogmfourteen from './pages/Blogmfourteen';
import Blogmfifteen from './pages/Blogmfifteen';
import Blogmsixteen from './pages/Blogmsixteen';
import Blogmseventeen from './pages/Blogmseventeen';
import Blogmeighteens from './pages/Blogmeighteens';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BestMaterialForSustainableHouse from './pages/BestMaterialForSustainableHouse';
import TheRoleOfTechnologyInModernCommercialConstruction from './pages/TheRoleOfTechnologyInModernCommercialConstruction';
import HowToDesignMultiFunctionalSpacesInYourHome from './pages/HowToDesignMultiFunctionalSpacesInYourHome';
import TheImportanceOfSpacePlanningInResidentialArchitecture from './pages/TheImportanceOfSpacePlanningInResidentialArchitecture';
import HowtoEstimateConstructionCosts from './pages/HowtoEstimateConstructionCosts';
import ImportanceofVastuShastrainModernHomeConstruction from './pages/ImportanceofVastuShastrainModernHomeConstruction';
import BenefitsofTurnkeyConstructionServices from './pages/BenefitsofTurnkeyConstructionServices';
import BestColorCombinationsforHomeInteriorDesign from './pages/BestColorCombinationsforHomeInteriorDesign';
import FloorPlanDetail from './pages/FloorPlanDetail';
import Blogmnineteen from './pages/Blogmnineteen';
import Blogmtwenty from './pages/Blogmtwenty';
import Blogmtwentyone from './pages/Blogmtwentyone';
import Blogmtwentytwo from './pages/Blogmtwentytwo';
import Blogmtwentythree from './pages/Blogmtwentythree';
import Blogmtwentyfour from './pages/Blogmtwentyfour';
import Blogmtwentyfive from './pages/Blogmtwentyfive';
import Blogmtwentysix from './pages/Blogmtwentysix';
import Blogmtwentyseven from './pages/Blogmtwentyseven';
import Blogmtwentyeight from './pages/Blogmtwentyeight';

const App = () => {
  const helmetContext = {}
  return (
    <>
    <HelmetProvider context={helmetContext}>
    <Router>
    <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            position: "relative",
            top: "5px",
          },
        }}
      />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/test' exact element={<VerticalStepperForm/>}/>
        <Route path='/about-us' exact element={<About/>}/>
        <Route path='/blogs' exact element={<Blogs/>}/>
        <Route path='/portfolio' exact element={<Portfolio/>}/>
        <Route path='/portfolio/:id' exact element={<PortfolioIndividual/>}/>
        <Route path='/services' exact element={<ServicePage/>}/>
        <Route path='/contact-us' exact element={<Contactus />}/>
        <Route path='/terms-and-conditions' exact element={<TermsandCondition />}/>
        <Route path='/cancellation-policy' exact element={<Cancellation />}/>
        <Route path='/privacy-policy' exact element={<PrivacyPolicy />}/>
        <Route path='/careers' exact element ={<Careers/> }/>
        <Route path='/commercial-construction' exact element={<CommercialConstruction />}/>
        <Route path='/how-to-choose-right-location-for-your-dream-home' exact element={<Blogfive />} />
        <Route path='/how-to-choose-right-construction-company-for-your-project' exact element={<Blogsnine/>} />
        <Route path='/the-role-of-architectural-design-in-creating-sustainable-homes' exact element={<IndividualBlogsPage />} />
        <Route path='/how-to-choose-the-right-floor-plan-for-your-dream-home' exact element={<Blogspage />} />
        <Route path='/the-top-trends-in-home-construction-and-design-for-2023' exact element={<IndividualBlogsPage2 />} />
        <Route path='/why-choose-house-construct-top-construction-company-in-bangalore' exact element={<Blogfour />} />
        <Route path='/difference-between-residential-and-commercial-construction' exact element={<Blogsix />} />
        <Route path='/top-commercial-construction-trends-in-2024' exact element={<Blogseven/>} />
        <Route path='/10-mistakes-to-avoid-while-building-your-new-home' exact element={<Blogeight/>} />
        <Route path='/how-to-select-right-floor-plan-for-your-family-needs' exact element={<Blogmeleven/>} />
        <Route path='/what-to-consider-before-starting-your-house-construction-project' exact element={<Blogmtwelve/>} />
        <Route path='/how-to-ensure-safety-on-construction-site' exact element={<Blogmthirteen/>} />
        <Route path='/top-10-home-interior-design-trends-you-need-to-know' exact element={<Blogmfourteen/>} />
        <Route path='/common-interior-design-mistakes-and-how-to-avoid-them' exact element={<Blogmfifteen/>} />
        <Route path='/how-to-choose-right-design-for-your-commercial-space' exact element={<Blogmsixteen/>} />
        <Route path='/choosing-the-perfect-color-scheme-for-your-house' exact element={<Blogmseventeen/>} />
        <Route path='/modern-interior-design-ideas-for-any-space' exact element={<Blogmeighteens/>} /> 
        <Route path='/affordable-house-construction-tips-for-bangalore-in-2025' exact element={<Blogmnineteen/>} /> 
        <Route path='/how-turnkey-home-construction-reduces-stress-for-bangalore-families' exact element={<Blogmtwenty/>} /> 
        <Route path='/modern-kitchen-interior-design-trends-in-bangalore' exact element={<Blogmtwentyone/>} /> 
        <Route path='/modern-living-room-interior-ideas-for-compact-bangalore-homes' exact element={<Blogmtwentytwo/>} /> 
        <Route path='/top-10-questions-to-ask-your-home-builder-before-you-sign-the-contract' exact element={<Blogmtwentythree/>} /> 
        <Route path='/top-mistakes-to-avoid-while-choosing-a-builder-in-bangalore' exact element={<Blogmtwentyfour/>} /> 
        <Route path='/turnkey-vs-contract-based-construction-what-works-best-in-bangalore?' exact element={<Blogmtwentyfive/>} /> 
        <Route path='/what-makes-house-construct-different-from-other-builders?' exact element={<Blogmtwentysix/>} /> 
        <Route path='/what-should-you-look-for-in-a-construction-company-in-bangalore?' exact element={<Blogmtwentyseven/>} /> 
        <Route path='/why-house-construct-is-bangalores-trusted-home-building-partner' exact element={<Blogmtwentyeight/>} />



         {/*newlu added blogs 24-01-2024  */}
        <Route path='/how-to-select-the-best-materials-for-a-sustainable-home' exact element={<BestMaterialForSustainableHouse/>} /> 
        <Route path='/the-role-of-technology-in-modern-commercial-construction' exact element={<TheRoleOfTechnologyInModernCommercialConstruction/>} /> 
        <Route path='/how-to-design-multi-functional-spaces-in-your-home' exact element={<HowToDesignMultiFunctionalSpacesInYourHome/>} /> 
        <Route path='/the-importance-of-space-planning-in-residential-architecture' exact element={<TheImportanceOfSpacePlanningInResidentialArchitecture/>} />

        {/*newlu added blogs 13-03-2025  */} 
        <Route path='/how-to-estimate-construction-costs-in-bangalore' exact element={<HowtoEstimateConstructionCosts />} />
        <Route path='/importance-of-vastu-shastra-in-home-construction' exact element={<ImportanceofVastuShastrainModernHomeConstruction />} />
        <Route path='/benefits-of-turnkey-construction-services' exact element={<BenefitsofTurnkeyConstructionServices />} />
        <Route path='/best-color-combinations-for-home-interior-design-in-bangalore' exact element={<BestColorCombinationsforHomeInteriorDesign />} />
        <Route path='/house-floor-plans' exact element={<HouseFloorPlans/>}/>
        <Route path='/house-floor-plans/:slug' element={<FloorPlanDetail />} />
      </Routes>
    </Router>
    </HelmetProvider>
    </>
  )
}

export default App