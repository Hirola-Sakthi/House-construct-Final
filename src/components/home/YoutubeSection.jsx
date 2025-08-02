/* eslint-disable no-unused-vars */
import React from 'react';
import OffersSwiper from './OffersSwiper';
import UTube from './UTube';

const YoutubeSection = () => {

    return (
        <div className='Home-WorksWeOffer-parent ' style={{ backgroundImage: `url(/images/test-bg.webp)` }}>
            <div className='Home-WorksWeOffer-title youtube-subparent'>
                <div className="row p-0 m-0">
                    <div className="col-md-6">
                        <h2>OUR CLIENTS TESTIMONIALS</h2>
                    </div>
                </div>
            </div>
            <UTube />
        </div>
    );
}

export default YoutubeSection;


