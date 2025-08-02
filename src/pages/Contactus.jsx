import React, { useEffect, useState } from "react";
import Banner from "../components/contactus/Banner";
import Careers from "../components/contactus/Careers";
import Experts from "../components/contactus/Experts";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Modal, Spin } from "antd";
import { Link } from "react-router-dom";
import Maps from "../components/contactus/Maps";
import Location from "../components/contactus/Locations";
import { Helmet } from "react-helmet-async";
import { LoadingOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import Whatsapp from "../components/home/Whatsapp";
const Contactus = () => {
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
  const openModal = () => {
    setVisibleModal(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const modalShownBefore = localStorage.getItem("modalShown");

    if (!modalShownBefore) {
      const timer = setTimeout(() => {
        setVisibleModal(true);
        localStorage.setItem("modalShown", "true");
      }, 1000);

      return () => clearTimeout(timer);
    } else {
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
        <title>
          Contact us to Build a Home | Home construction contractors | House
          Constrcut
        </title>
        <meta
          name="description"
          content="Contact our home construction contractors for appointments, quotations, project inquiries, feedback, or any information related to architectural and home construction services."
          data-rh="true"
        />
      </Helmet>
      <Header openModal={openModal} />
      <Banner />
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
      <Location />
      <Careers />
      <Maps />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Contactus;
