import React from 'react'
import { Link } from 'react-router-dom'

const JobsByLocation = () => {
    return (
        <>
            <div className='JobsByLocation-parent'>
                <h2>JOBS BY LOCATION</h2>
                <div className="container-lg container-xl container-xxl">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <Link to='/contact-us'>
                            <div className='JobsByLocation-sub'>
                                <div className='JobsByLocation-sub-image'>
                                    <img src="/images/bangloorecity.jpg" alt="" />
                                </div>
                                <p>BANGALORE</p>
                            </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-4">
                        <Link to='/contact-us'>
                        <div className='JobsByLocation-sub'>
                                <div className='JobsByLocation-sub-image'>
                                    <img src="/images/chennaicity.jpg" alt="" />
                                </div>
                                <p>CHENNAI</p>
                            </div>
                        </Link>
                         
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <Link to='/contact-us'>
                            <div className='JobsByLocation-sub'>
                                <div className='JobsByLocation-sub-image'>
                                    <img src="/images/mysore.jpg" alt="" />
                                </div>
                                <div className='JobsByLocation-sub-title'>
                                    <p>MYSORE</p>
                                </div>
                            </div>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsByLocation