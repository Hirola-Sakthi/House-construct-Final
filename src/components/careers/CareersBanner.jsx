import React from 'react'

const CareersBanner = () => {
  return (
    <>
    <div className='CareersBanner-parent'>
        <div className='CareersBanner-bg-image' style={{backgroundImage:`url('/images/careersbanner2.webp')`}}>
        <div className='CareersBanner-title'>
           <div>
           <h1>Empower Your Future:</h1>
            <h1> Explore Career Opportunities with House Construct</h1>
           </div>
        </div>
        </div>

        <div className="BannerBelowSection">
           <div className="container-lg container-xl container-xxl">
           <h2>What its like to work with House Construct ?</h2>
            <div className="row m-0">
                <div className="col-md-4 col-sm-6">
                    <div className="BannerBelowSection-card">
                        <div className='BannerBelowSection-card-image'>
                            <img src="/images/ourculture.png" alt="" />
                        </div>
                        <h5>Our Culture</h5>
                        <p>Discover what makes our workplace unique. We value diversity and foster a supportive environment where every voice is heard.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="BannerBelowSection-card">
                        <div className='BannerBelowSection-card-image'>
                            <img src="/images/teamcollaboration.jpg" alt="" />
                        </div>
                        <h5>Team Collaboration</h5>
                        <p>Explore how we foster collaboration among our teams. Working together, we leverage our diverse talents to deliver exceptional results.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="BannerBelowSection-card">
                        <div className='BannerBelowSection-card-image'>
                            <img src="/images/growth.jpg" alt="" />
                        </div>
                        <h5>Professional Growth</h5>
                        <p>Learn about opportunities for career advancement. We invest in our employees' development through training, mentorship, and growth opportunities.</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>

    </>
  )
}

export default CareersBanner