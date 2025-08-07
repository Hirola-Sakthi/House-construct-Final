import React from 'react';

const CommercialOurservices = () => {
  const services = [
    {
      imageUrl: '/commercialconstruction/retailbuilding.jpg',
      name: 'Retail & Commercial Building'
    },
    // {
    //     imageUrl: '/commercialconstruction/pgbuilding.png',
    //     name: 'PG Building'
    //   },
    //   {
    //     imageUrl: '/commercialconstruction/hotelbuilding.jpg',
    //     name: 'Hotel Building'
    //   },
    //   {
    //     imageUrl: '/commercialconstruction/hospitalbuilding.jpg',
    //     name: 'Hospital Building'
    //   },
    //   {
    //     imageUrl: '/commercialconstruction/schoolbuilding.jpg',
    //     name: 'School Building'
    //   },

      {
        imageUrl: '/commercialconstruction/commercial-construction-for-developers.avif',
        name: 'Construction Partners for Developers'
      },
  ];

  return (
    <>
    
    <div className='CommercialOurservices-parent'>
      <div className="container-lg container-xl container-xxl">
        <div className='CommercialOurservices-title'>
          <h1>Our Services</h1>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-sm-6 col-md-6">
              <div className='commercialourservices-sub'>
                <div className='commercialourservices-image-parent'>
                  <img src={service.imageUrl} alt={service.name} />
                </div>
                <p>{service.name}</p>
              </div>
                 <div id="commercial" className="hidden-div-for-commercial"></div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default CommercialOurservices;
