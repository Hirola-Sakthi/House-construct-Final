import React from 'react'

const ConstructionSpace = () => {
    const data = [
        {
            imageurl: "/commercialconstruction/measurement.png",
            text: "1,750,000+",
            subtext: "Sq.Ft."
        },
        {
            imageurl: "/commercialconstruction/timely-update.png",
            text: "Timely updates",
            subtext: "and delivery"
        },
        {
            imageurl: "/commercialconstruction/star-medal.png",
            text: "410+",
            subtext: "Quality Checks per unit"
        },
        {
            imageurl: "/commercialconstruction/workers.png",
            text: "100+",
            subtext: "Engineers"
        }
    ]
    return (
        <>
            <div className='ConstructionSpace-parent'>
                <div className="container-lg container-xl container-xxl">
                    <div className='ConstructionSpace-title'>
                        <h1>We're Revolutionizing the Construction Industry.</h1>
                        <p>For over 27 years, we've tirelessly worked to streamline the construction process through
                            our tech-driven expertise. Here's how our innovative approach sets us apart.</p>
                    </div>
                    <div className="row">
                        {data.map((item, index) => (
                            <div className="col-6 col-sm-3 col-md-3" key={index}>
                                <div className='ConstructionSpace-sub'>
                                    <div className='ConstructionSpace-sub-image'>
                                        <div className='ConstructionSpace-sub-image-sub'>
                                            <img src={item.imageurl} alt="" />
                                        </div>
                                    </div>
                                    <h5>{item.text} </h5>
                                    <p>{item.subtext}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </>

    )
}

export default ConstructionSpace