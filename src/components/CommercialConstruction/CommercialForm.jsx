import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CommercialForm = () => {
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
          "https://houseconstruct.in/forms/commercial.php",
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
      <div className="CommercialForm-parent">
        <div className="container">
          <div className="CommercialForm-title">
            <h1>Need a Reliable Construction Partner? Look No Further! ?</h1>
            <p>Submit your details here and we will get in touch soon</p>
          </div>
          <div className="CommercialForm-sub">
            <form onSubmit={handleSubmit}>
              <div className="col-md-8 m-auto">
                <div className="row">
                  <div className="col-md-6">
                    <label for="Name">Name*</label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Phone">Phone*</label>
                    <br />
                    <input
                      type="tele"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Location Of Your Plot">
                      Location Of Your Plot
                    </label>
                    <br />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="privacy-policy">
                    <div className="privacy-policy-sub">
                      <span>*</span>
                      <p>
                        By submitting this form, I confirm that I have read and
                        agreed to accept House Construct's
                      </p>
                      <p>
                        <Link to="/terms-and-conditions">
                          Terms & Conditions
                        </Link>
                      </p>
                    </div>
                    <button
                    type="submit"
                    name="submit"
                    disabled={isLoading}
                    className={isLoading ? "loading" : ""}
                  >
                    {isLoading ? (
                      <>
                        <Spin indicator={<LoadingOutlined spin />} />
                        <span style={{ marginLeft: "8px" }}>Submitting...</span>
                      </>
                    ) : (
                      "submit ➜"
                    )}
                  </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommercialForm;
