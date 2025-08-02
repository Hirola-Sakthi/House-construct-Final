import React from 'react'

const WhyHouseConstruct = () => {
    const data = [
        {
            imageurl: "/commercialconstruction/financial-insurance.png",
            title: "No Subcontracting",
            hiddentitle: "No Subcontracting",
            text1: "From design till the handover of your keys our in-house team makes sure that you have a seamless journey.",
        },
        {
            imageurl: "/commercialconstruction/experience.png",
            title: "1,000+ projects managed",
            hiddentitle: "1,000+ projects managed",
            text1: "With a track record of successfully managing over 1,000 projects, we bring efficiency and innovation to every endeavor.",
        },
        {
            imageurl: "/commercialconstruction/nodelay.png",
            title: "No Delay Policy",
            hiddentitle: "No Delay Policy",
            text1: "We have zero tolerances towards delay and if there is any delay in handover we will pay a penalty.",
        },
        {
            imageurl: "/commercialconstruction/star-medal.png",
            title: "410+ unique quality checks",
            hiddentitle: "410+ unique quality checks",
            text1: "quality checks so intense that you can easily track and build a monument at your fingertips.",
        },
        {
            imageurl: "/commercialconstruction/measurement.png",
            title: "27+ years of experience in handling 5,000 to 500,000 sq ft",
            hiddentitle: "27+ years of experience in handling 5,000 to 500,000 sq ft",
            text1: "With 27+ years of experience, we specialize in managing projects ranging from 5,000 to 500,000 sq. ft., delivering precision, efficiency, and excellence at every scale",
        },
        {
            imageurl: "/commercialconstruction/transparency.png",
            title: "Absolute Transparency",
            hiddentitle: "Absolute Transparency",
            text1: "We take pride in our unwavering commitment to transparency. We believe in clear communication, and open collaboration with our clients.",
        },
    ]
    return (
        <>
            <div className='WhyHouseConstruct-parent'>
                <div className="container">
                    <div className='WhyHouseConstruct-title'>
                        <h1>Why Choose House Construct ?</h1>
                    </div>
                    <div className="row">
                        {data.map((data, index) => (
                            <div className="col-sm-6 col-md-4" key={index}>
                                <div className='WhyHouseConstruct-sub'>
                                    <div className='WhyHouseConstruct-image'>
                                        <div className='WhyHouseConstruct-image-sub'>
                                        <img src={data.imageurl} alt="" />
                                        </div>
                                    </div>
                                    <h5>{data.title} </h5>
                                    <div className='hidden-content'>
                                        <h4>{data.hiddentitle} </h4>
                                        <p>{data.text1}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyHouseConstruct