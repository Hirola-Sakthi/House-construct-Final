import React from 'react'
import { Link } from 'react-router-dom'

const OurTechnology = () => {
    return (
        <>
            <div className='OurTechnology-parent'>
                <div className="container-lg container-xl container-xxl">
                    <div className='OurTechnology-title'>
                        <h1> Our Technology</h1>
                        <p>Featuring construction at your fingertips! We offer:</p>
                    </div>
                    <div className='OurTechnology-content'>
                    <div className="row">
                    <div className="col-md-6">
                        <div className='OurTechnology-left-image'>
                            <img src="/commercialconstruction/Consulation.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <div className='OurTechnology-right-content'>
                                    <div className='OurTechnology-right-content-sub'>
                                    <div className='OurTechnology-sub-image-parent'>
                                        <img src="/commercialconstruction/phone.png" alt="" />
                                    </div>
                                    </div>
                                    <h5>Mobile-Ready</h5>
                                    <p>Designed for Seamless Mobile Integration</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className='OurTechnology-right-content'>
                                    <div className='OurTechnology-right-content-sub'>
                                    <div className='OurTechnology-sub-image-parent'>
                                        <img src="/commercialconstruction/work-in-progress.png" alt="" />
                                    </div>
                                    </div>
                                    <h5>Live Updates</h5>
                                    <p>on site visits and quality checks</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className='OurTechnology-right-content'>
                                <div className='OurTechnology-right-content-sub'>
                                    <div className='OurTechnology-sub-image-parent'>
                                        <img src="/commercialconstruction/report.png" alt="" />
                                    </div>
                                    </div>
                                    <h5>Smart Budgeting</h5>
                                    <p>Efficiently track project costs with our intuitive tools</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className='OurTechnology-right-content'>
                                <div className='OurTechnology-right-content-sub'>
                                    <div className='OurTechnology-sub-image-parent'>
                                        <img src="/commercialconstruction/saving.png" alt="" />
                                    </div>
                                    </div>
                                    <h5>Timeliness Predictability</h5>
                                    <p>through Intelligent Systems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='OurTechnology-content-below'>
                    <p>Do you want a free demo on our tech?</p>
                    <p><Link to='/contact-us'>Click here!</Link> </p>
                    </div>
                </div>
                </div>
                
            </div>
        </>

    )
}

export default OurTechnology