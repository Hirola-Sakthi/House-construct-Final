import React from 'react'
import { Link } from 'react-router-dom'

const Cancellationbanner = () => {
  return (
    <div className='about-us-banner-main'>
    <div className="about-us-banner-background">
        <div className="row">
            <div className="col-md-6 about-us-banner-left-section">
                <div className="about-us-banner-subtitle d-flex gap-3">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/cancellation-policy">. Cancellation Policy</Link> </p>
                </div>
                <h1 className='about-us-banner-title'>Cancellation Policy</h1>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cancellationbanner