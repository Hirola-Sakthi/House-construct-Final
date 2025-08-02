/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import ServicesBanner from '../components/Services/ServicesBanner'
import ServiceShowcase from '../components/Services/ServiceShowcase'
import Besthome from '../components/Services/Besthome'
import Ourservices from '../components/Services/Ourservices'
import Trustedpartners from '../components/home/Trustedpartners'
import ServiceTiming from '../components/Services/ServiceTiming'
import Footer from '../components/home/Footer'
import WhoWeAre from '../components/about/WhoWeAre'
import { Modal, Spin } from 'antd'
import ServiceOfficePage from './ServiceOfficePage'
import { Link } from 'react-router-dom'
import HomePackages from '../components/home/HomePackages'
import Highquality from '../components/home/Highquality'
import TopResidential from '../components/about/TopResidential'
import { Helmet } from 'react-helmet-async'
import { LoadingOutlined } from '@ant-design/icons'
import Whatsapp from '../components/home/Whatsapp'

const ServicePage = () => {

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      location: "",
      phone: "",
      plotsize: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const validateForm = () => {
      const errors = {};
      if (!formData.name.trim()) errors.name = "Name is required";
      if (!formData.phone.trim()) errors.phone = "Phone number is required";
      if (!/^\d{10}$/.test(formData.phone))
        errors.phone = "Phone number is invalid";
      return errors;
    };
  
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);
  const openModal = ()=>{
    setVisibleModal(true)
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

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
  }, []);

  const handleModalClose = () => {
    setVisibleModal(false);
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formErrors = validateForm();
    console.log("formErrors", formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(
          "https://houseconstruct.in/forms/contact.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const data = await response.json();

          if (data.status === "success") {
            setFormData({
              name: "",
              email: "",
              location: "",
              phone: "",
              plotsize: "",
            });
            setIsLoading(false);
            setVisibleModal(false);
            toast.success("Successfully we got your info.");
          } else {
            console.error("Error:", data.message);
            setModalMessage(
              data.message || "An error occurred. Please try again."
            );
            toast.error(data.message);
          }
        } else {
          console.error("Error:", response.statusText);
          setModalMessage("An error occurred. Please try again.");
          toast.error("An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setModalMessage("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      setErrors(formErrors);
      setModalMessage("Please correct the errors in the form.");
      Object.values(formErrors).forEach((error) => {
        toast.error(error);
      });
    }

    setIsLoading(false);
    setShowModal(true);
  };

  return (
    <>
    <Helmet>
      <title>Services | home construction company | House Construct</title>
      <meta name='description' content='House Construct, your trusted home construction company in Bangalore. Expertise in interior design and renovation services to transform your space into a dream home.' data-rh="true" />
    </Helmet>
      <div className='Servicepage-main-parent'>
      <Modal
        title=""
        open={visibleModal}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        className="cautious-title"
        footer={null}
      >
        <div className=" dataform">
          <div className="banner-form-services">
            <div className="contactUs-banner-form">
              <div className="contactUs-banner-form-sub">
                <h2 className="text-center">Why wait?</h2>
                <h4 className="text-center">Start building your dream home today!</h4>
                <h5 className="text-center"><strong>"Get free vaastu consultation"</strong></h5>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name*"
                  />
                  <br />
                  <input
                    type="tele"
                    name="phone"
                    placeholder="Mobile Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email ID"
                  />
                  <br />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Plot Location"
                  />
                  <br />
                  <input
                    type="text"
                    name="plotsize"
                    value={formData.plotsize}
                    onChange={handleInputChange}
                    placeholder="Plot Size"
                  />
                  <br />
                  <button
                    type="submit"
                    name="submit"
                    disabled={isLoading}
                    className={isLoading ? "loading" : ""}
                  >
                    {isLoading ? (
                      <>
                        <Spin indicator={<LoadingOutlined spin />} />
                        <span style={{ marginLeft: "8px" }}>
                          Submitting...
                        </span>
                      </>
                    ) : (
                      "submit ➜"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
        <Header openModal={openModal} />
        <ServicesBanner />
        <TopResidential/>
        <ServiceOfficePage/>
        <Highquality/>
        <Besthome />
        {/* <Trustedpartners />
        <WhoWeAre /> */}
        {/* <ServiceShowcase /> */}
        {/* <ServiceTiming/> */}
        {/* <Ourservices /> */}
        {/* <HomePackages/> */}
        <Whatsapp />
        <Footer/>
      </div>
    </>
  )
}

export default ServicePage