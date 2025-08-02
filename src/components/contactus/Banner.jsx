import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Banner = () => {

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

        console.log("response", response)

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
      <div className="contactus-banner">
        <div
          className="contactus-banner-sub"
          style={{ backgroundImage: "url('/contactus/contact-banner2.jpg')" }}
        >
          <div className="row">
            <div className="col-md-5 col-sm-5 about-us-banner-left-section">
              <div className="about-us-banner-subtitle d-flex gap-3">
              <Link to='/'><p>Home</p></Link>
              <Link><p>. Contact Us</p></Link>
              </div>
              <Link><h1 className='about-us-banner-title'>Contact Us</h1></Link>
            </div>
            <div className="col-md-6 col-sm-7">
              <div className="contactUs-banner-form">
               <div className="contactUs-banner-form-sub">
               <h2 className="text-center">Why wait?</h2>
                <h4 className="text-center text-white">Start building your dream home today!</h4>
                <h5 className="text-center text-white"><strong>"Get free vaastu consultation"</strong></h5>
               {/* <form action="https://houseconstruct.in/forms/contact.php" method="POST">
                  <input type="text" name="name" placeholder="Your Name*" /><br />
                  <input type="tele" name="phone" placeholder="Mobile Number*"/><br />
                  <input type="email" name="email" placeholder="Email ID*"/><br />
                  <input type="text" name="location" placeholder="Plot Location"/><br />
                  <input type="text" name="plotsize" placeholder="Plot Size"/><br />
                  <button type="submit" name="submit">Submit</button>
                </form> */}
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
        </div>
      </div>
    </>
  );
};

export default Banner;
