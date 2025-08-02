import React from 'react'
import { ArrowUpRight } from 'react-feather';
import { Link } from 'react-router-dom';
const ServiceOfficePage = () => {
    return (
        <>
            <div className="service-parent-offer">
                <div className="service-offer-sub-parent"  style={{ backgroundImage: "url('/servicepage/bg-bannner-image.png')" }}>
                    <div className="row">
                        <div className="col-sm-6 col-md-7">
                            <div className='serivice-offer'>
                                <h6>WHAT WE OFFER</h6>
                                <h1>Providing solutions for construction,
                                    Interior, and Architecture Design.</h1>
                                <p>House Construct is your trusted partner for a complete range of construction, interior design, and architectural services. With a commitment to quality and innovation, we bring your dreams to life, creating functional and
                                    aesthetically pleasing spaces that reflect your unique style and needs.</p>
                                <div className="button-style">
                                <button className='WhoweraeAbout-sub-viewmore-button'>
                                    <Link to="/contact-us">View More</Link>
                                    <ArrowUpRight/>
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-5">
                            <div className='service-offer-iamge'>
                                <img src="../servicepage/banner-section1.jpeg" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceOfficePage