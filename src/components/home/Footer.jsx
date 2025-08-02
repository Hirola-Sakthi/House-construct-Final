/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ setSelectedCityFromFooter }) => {
  const handleBangaloreFooterLink = () => {
    setSelectedCityFromFooter("Bangalore");
  };

  const handleMysuruFooterLink = () => {
    setSelectedCityFromFooter("Mysore");
  };

  const handleChennaiFooterLink = () => {
    setSelectedCityFromFooter("Chennai");
  };

  return (
    <>
      <div className="footer-main-parent">
        <div className="footer-main-subparent">
          <div className="container">
            <div className="row">
              <div className="col-md-3 p-0">
                <div className="footer-logo-iamge">
                  <div>
                    <img src="/mainlogoimg.jpg" alt="" />
                  </div>

                  <p>
                    House-Construct is the best house Construction Company in
                    Bangalore. But we are different in many ways. Apart from
                    experience, transparency, quality and time conscious.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Office</h5>
                <div className="icon-footer-iamges">
                  <div>
                    <img src="/footers-images/phone-call.png" alt="" />
                  </div>
                  <a
                    href="tel:+91 7557557857"
                    style={{ textDecoration: "none" }}
                  >
                    <p>+91 7557557857​</p>
                  </a>
                </div>
                <div className="icon-footer-iamges">
                  <div>
                    <img src="/footers-images/mail.png" alt="" />
                  </div>
                  <a
                    href="mailto:SUPPORT@HOUSECONSTRUCT.IN"
                    style={{ textDecoration: "none" }}
                  >
                    <p>SUPPORT@HOUSECONSTRUCT.IN​</p>
                  </a>
                </div>
                <div className="icon-footer-iamges">
                  <div>
                    <img src="/footers-images/user-check.png" alt="" />
                  </div>
                  <Link
                    to={"https://maps.app.goo.gl/kTCE9EpcAeqDwYuJ6"}
                    style={{ textDecoration: "none" }}
                  >
                    <p>
                      #216 First Floor, Service Road, 12 Block BDA layout, 2nd
                      Stage, Nagarabhaavi, Bengaluru, Karnataka 560072
                    </p>
                  </Link>
                </div>
                <div className="icon-footer-iamges">
                  <div>
                    <img src="/footers-images/pie-chart.png" alt="" />
                  </div>
                  <p>MON - SUN: 10 AM - 7 PM ​</p>
                </div>
              </div>
              <div className="col-md-2">
                <h5>Quick Links</h5>

                <div className="footer-row-2-techinal">
                  <p>
                    <Link to="/">Home</Link>
                  </p>
                  
                  <p>
                    <Link to="/blogs">Blogs</Link>
                  </p>
                  <p>
                    <Link to="/contact-us">Contact Us</Link>
                  </p>
                  <p>
                    <Link to="/careers">Careers</Link>
                  </p>
                  <p>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                  </p>
                  {/* <p><Link to="/terms-and-conditions">Terms & Conditions</Link></p>
                                    <p><Link to="/cancellation-policy">Cancellation Policy</Link></p> */}
                </div>
              </div>
              <div className="col-md-3 p-0">
                <h5>Social Links</h5>
                <div className="footer-row-3-techinal">
                  <div className="div-fun">
                    <Link
                      to={"https://www.facebook.com/houseconstructofficial/"}
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </div>
                  <div className="div-fun">
                    <Link
                      to={"https://www.linkedin.com/company/house-construct-official/"}
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                  <div className="div-fun">
                    <Link to={"https://www.instagram.com/houseconstruct__/"}>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="div-fun">
                    <Link
                      to={"https://www.youtube.com/@houseconstructofficial"}
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* footer link list starts here */}
            <div className="row footer-links">
              <div className="col-md-4 footer-link-top-padding">
                <h5>Construction Companies Bengaluru</h5>
                <div className="footer-row-2-techinal">
                  <p>
                    <a href="#Homepackages" onClick={handleBangaloreFooterLink}>
                      Construction Company Bengaluru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleBangaloreFooterLink}>
                      Construction Contractors Bengaluru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleBangaloreFooterLink}>
                      Home Construction in Bengaluru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleBangaloreFooterLink}>
                      Builders in Bengaluru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleBangaloreFooterLink}>
                      Low-Cost House Construction in Bengaluru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleBangaloreFooterLink}>
                      Building Contractors Bengaluru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleBangaloreFooterLink}>
                      Construction company near me
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleBangaloreFooterLink}>
                      Best Architects near me
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Construction Companies Mysuru</h5>
                <div className="footer-row-2-techinal">
                  <p>
                    <a href="#Homepackages" onClick={handleMysuruFooterLink}>
                      Construction Company Mysuru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleMysuruFooterLink}>
                      Construction Contractors Mysuru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleMysuruFooterLink}>
                      Home Construction in Mysuru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleMysuruFooterLink}>
                      Builders in Mysuru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleMysuruFooterLink}>
                      Low-Cost House Construction in Mysuru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleMysuruFooterLink}>
                      Building Contractors Mysuru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleMysuruFooterLink}>
                      Top Home Constuction campany in Mysuru
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleMysuruFooterLink}>
                      House Construction Contractors in Mysuru
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Construction Companies Chennai</h5>
                <div className="footer-row-2-techinal">
                  <p>
                    <a href="#Homepackages" onClick={handleChennaiFooterLink}>
                      Construction Company Chennai
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleChennaiFooterLink}>
                      Construction Contractors Chennai
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleChennaiFooterLink}>
                      Home Construction in Chennai
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleChennaiFooterLink}>
                      Builders in Chennai
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleChennaiFooterLink}>
                      Low-Cost House Construction in Chennai
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleChennaiFooterLink}>
                      Building Contractors Chennai
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleChennaiFooterLink}>
                      Top Home Constuction campany in Chennai
                    </a>
                  </p>
                  <p>
                    <a href="#Homepackages" onClick={handleChennaiFooterLink}>
                      House Construction Contractors in Chennai
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* footer link list ends here */}
            <hr />
            <div className="house-construct-line">
              <p>
                © 2024 House Construct. All rights reserved. By{" "}
                <Link to="https://www.hirolainfotech.com/">
                  Hirola InfoTech Solutions
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
