import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



import { Steps } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import SwiperCore from 'swiper';

SwiperCore.use([SwiperCore.Navigation]);

const { Step } = Steps;

const CommercialPackages = ({ CommercialPackagesdata }) => {
  const citiesData = CommercialPackagesdata.city;
  const [selectedCity, setSelectedCity] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const [scrollTop, setScrollTop] = useState(0);
  const swiperRef = useRef(null)

  // Set initial selected city when component mounts
  useEffect(() => {
    if (citiesData?.length > 0) {
      setSelectedCity(citiesData[0].name);
    }
  }, [citiesData]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setCurrentStep(0);
  };

  const handlePackageChange = (packageIndex, packageName) => {
    setCurrentStep(packageIndex);
  };

  const toggleAccordion = (index, e) => {
 
    setTimeout(() => {
      setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
    }, 0);

  };


  
  const handleScroll = (e) => {
    // Update scrollTop state when the main-package is scrolled
    const { scrollTop: newScrollTop } = e.target;
    setScrollTop(newScrollTop);
  };

  useEffect(() => {
    // Apply the same scrollTop to all main-package elements
    const otherContents = document.querySelectorAll('.main-package');
    otherContents.forEach((content) => {
      content.scrollTop = scrollTop;
    });
  }, [scrollTop]);
  


  return (
    <>
      <div className="CommercialPackages-parent">
      <div className="home-packages">
                <div className="home-packages-sub">
                <div className="Commercialpackages-swiper-parent">
                      <div className="package-text">
                        <h3>Commercial Packages</h3>
                        <p>Find the best construction packages.*</p>
                        <span> Currently showing for </span>
                        <select value={selectedCity} onChange={handleCityChange}>
                          <option value="">Select City</option>
                          {citiesData?.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>


                      {selectedCity && (
                        <div className="step-content">
                          <Swiper
                            
                            slidesPerView={2}
                            spaceBetween={10}
                            navigation={{
                              clickable: true
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                              992: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                              },
                              575: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                              480: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              390: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              280: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                            }}
                          >

                            {citiesData.find((city) => city.name === selectedCity).packages.map((pkg, index) => (

                              <>
                                <SwiperSlide style={{justifyContent: "center !important"}}   key={index}>
                                  <div className="main-package" swiperRef={swiperRef} onScroll={handleScroll}  id={`other-content-${index} `}>

                                    <h3>{pkg.name}</h3>
                                    <div className="accordian">

                                      {pkg.features.map((feature, idx) => (
                                        <div key={idx} className="accordion-item">
                                          <button
                                            className="accordion-header"
                                            onClick={(e) => toggleAccordion(idx, e)}
                                          >
                                            <h4 >{feature.title}</h4>
                                            <span className="acc-count">
                                              {openAccordion === idx ? "-" : "+"}
                                            </span>
                                          </button>
                                          <div
                                            className={`accordion-content ${openAccordion === idx ? "open" : ""
                                              }`}
                                          >
                                            <ul>
                                              {feature.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </SwiperSlide>
                              </>
                            ))}
                          </Swiper>
                        </div>
                      )}
                    </div>
                </div>
              </div>
      </div>

    </>
  );
};

export default CommercialPackages;
