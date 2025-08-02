import React from "react";
import "../../assets/sass/aboutUs/_location.scss";
import { MapPin, Mail, Clock, PhoneCall } from "react-feather";
import Locationss from "../contactus/Locations";
const Location = () => {
  return (
    <div className="location-main ">
      <div className="row first-row p-0 m-0">
        <p>GET IN TOUCH WITH US</p>
        <h1 className="title">
          Our Office Locations
        </h1>
      </div>
      <Locationss/>
    </div>
  );
};

export default Location;