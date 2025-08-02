import React from "react";
import { Link } from "react-router-dom";

const ReferAndEarn = () => {
  return (
      <div
        className="Home-WorksWeOffer-parent" id='Homepackages'
        style={{ backgroundImage: `url(/images/test-bg.webp)` }}
      >
        <div className="Home-WorksWeOffer-title">
          <div className="row p-0 m-0">
            <div className="col-md-7">
              <h2 className="refer-text">To refer and earn 50,000</h2>
              <span className='referandEarn-button ' >
            <Link className="click-here-button" to='/contact-us'>
                <p>click here</p>
              </Link>
            </span>
            </div>
            <div className="col-md-5">
              <img className="refer-and-earn-image" src="/refer-and-earn.png" alt="" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default ReferAndEarn;
