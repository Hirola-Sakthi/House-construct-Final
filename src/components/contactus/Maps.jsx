import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Maps = () => {
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
            // setVisibleModal(false);
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
      <div className="ContactUs-maps-parent">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="ContactUs-location-map">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31100.683668145484!2d77.54990700000002!3d12.998345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d5b2072d399%3A0x7d22d0c8b1ead12!2sHouse-Construct!5e0!3m2!1sen!2sus!4v1712732514353!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maps;
