import React from 'react'

const MaterialSupply = () => {
    const data = [
        {
           imageurl:"/commercialconstruction/skus.png",
           text:"5000+",
           subtext:"SKU's"
        },
        {
            imageurl:"/commercialconstruction/icons8-high-quality-100.png",
            text:"High-quality",
            subtext:"Materials"
         },
         {
            imageurl:"/commercialconstruction/ontimedelivery.png",
            text:"On-Time Delivery",
            subtext:"Assured Quality Products"
         },
    ]
  return (
    <>
    <div className='MaterialSupply-parent'>
    <div className="container-lg container-xl container-xxl">
            <div className='ConstructionSpace-title'>
                <h1> Building Material Supply</h1>
                <p>We supply all the materials for our projects with our in-house Building Material Supply chain! Currently providing:</p>
            </div>
            <div className="row">
                {data.map((item,index)=>(
                      <div className="col-4 col-sm-4 col-md-4" key={index}>
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

export default MaterialSupply