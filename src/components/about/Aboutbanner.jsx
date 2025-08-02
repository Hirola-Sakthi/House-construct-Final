/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react'
import "../../assets/sass/aboutUs/_aboutusbanner.scss"
import { Link } from 'react-router-dom'

const Aboutbanner = () => {
  return (
    <div className='about-us-banner-main'>
        <div className="about-us-banner-background">
            <div className="row">
                <div className="col-md-5 about-us-banner-left-section">
                    <div className="about-us-banner-subtitle d-flex gap-3">
                        <p><Link to="/">Home</Link> </p>
                        <p><Link to="/about-us">. About Us</Link> </p>
                    </div>
                    <h1 className='about-us-banner-title'>About Us</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutbanner
