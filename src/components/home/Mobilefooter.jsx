import React from "react";
import { BadgeIndianRupee, Compass, Home, Map, Phone} from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";



const Mobilefooter = () => {
  const navigate = useNavigate();

  const handleHomeOffers =()=>{
    navigate("/#homeoffers")
  }

  const handleCommercial=()=>{
    navigate("/commercial-construction/#commercial")
  }

  const handleFloorplans =()=>{
    navigate("/house-floor-plans/#floorplans")
  }

    const handleHome =()=>{
    navigate("/#home")
  }
  return (
    <>
      <div className="d-flex justify-content-around align-items-center py-2  fixed-bottom border-top d-md-none"
      style={{backgroundColor:"white",height:"70px"}}
      >
        <a href="#home" onClick={handleHome} class="d-flex flex-column justify-content-center align-items-center text-center text-decoration-none"
        style={{color: '#8a6f30'}}
        >
         <Home size={20} className="mb-1" />
         <small style={{fontSize:"11px"}}>Home</small>
        </a>
         <a href="#homeoffers"onClick={handleHomeOffers}  class="d-flex flex-column justify-content-center align-items-center text-center text-decoration-none"
        style={{color: '#8a6f30'}}
        >
         <Map size={20} className="mb-1" />
         <small style={{fontSize:"11px"}}>Our Projects</small>
        </a>

          < a href="tel:+919364000460" class="d-flex flex-column justify-content-center align-items-center text-center text-decoration-none">
         <div
         style={{
            backgroundColor: "#8a6f30",
            color:"white",
            height:"50px",
            width:"50px",
           position:"relative",
            top:"-30px",
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            border: '3px solid #8a6f30',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"50%"

          }}
        >
        <Phone size={24} className="mb-1" />
        </div>
         <small style={{fontSize:"11px",marginTop:"-25px",color: '#8a6f30'}}>Contact</small>
        </a>
         <a href="#commercial" onClick={handleCommercial} class="d-flex flex-column justify-content-center align-items-center text-center text-decoration-none"
        style={{color: '#8a6f30'}}
        >
         <BadgeIndianRupee size={20} className="mb-1" />
         <small style={{fontSize:"11px"}}>Commercial</small>
        </a>
         <a href="#floorplans" onClick={handleFloorplans} class="d-flex flex-column justify-content-center align-items-center text-center text-decoration-none"
        style={{color: '#8a6f30'}}
        >
         <Compass size={20} className="mb-1" />
         <small style={{fontSize:"11px"}}>Floor Plans</small>
        </a>
      </div>
    </>
  );
};

export default Mobilefooter;
