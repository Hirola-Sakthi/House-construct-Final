import React from 'react'
import { ArrowDown, ArrowUp } from 'react-feather'

const CompanyTimeline = () => {
    return (
        <>
            <div className='CompanyTimeline-parent'>
                <div className="container">
                    <div className='CompanyTimeline-title'>
                        <h2>TIMELINES</h2>
                        <div className='CompanyTimeline-title-sub'>
                            <p>WHAT WE DID</p>
                            <h3>Company Timeline</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className='CompanyTimeline-title-sub-text'>
                                <h1>1997</h1>
                            </div>
                            <div className='companytimeline-spinners'>
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only"></span>
                                </div>
                                <ArrowUp className='arrow-up'/>
                            </div>
                         
                        </div>
                        <div className="col-md-3">
                            <div className='CompanyTimeline-title-sub-text'>
                                <h6>Decade of Dedication</h6>
                                <p>A decade of relentless commitment to quality and innovation. By 2010, we had completed numerous projects only on reference basis, earning the trust of our clients.</p>
                            </div>
                            <div className='companytimeline-spinners'>
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only"></span>
                                </div>
                                <ArrowDown className='arrow-below'/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='CompanyTimeline-title-sub-text'>
                                <h1>2016</h1>
                            </div>
                            <div className='companytimeline-spinners'>
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only"></span>
                                </div>
                                <ArrowUp className='arrow-up'/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='CompanyTimeline-title-sub-text'>
                                <h6>Pioneering Digital Construction Excellence</h6>
                                <p>Introducing House-Construct, our digital-focused brand set to redefine construction. It marks our strategic leap into the future of innovative building solutions.</p>
                            </div>
                            <div className='companytimeline-spinners'>
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only"></span>
                                </div>
                                <ArrowDown className='arrow-below'/>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row secondrow">
                        <div className="col-md-3">
                            <div className='CompanyTimeline-title-sub-text'>
                                <h6>The Beginning</h6>
                                <p>House Construct(Jupiter.inc) is founded with a vision of excellence in construction. We take our first step towards creating exceptional living spaces.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='CompanyTimeline-title-sub-text'>
                                <h1>2010</h1>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='CompanyTimeline-title-sub-text'>
                                <h6>Firm Development</h6>
                                <p>In 2016, with over 19 years of experience, we completed our GST registration and continued to set new standards in the industry.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='CompanyTimeline-title-sub-text'>
                                <h1>2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyTimeline