// import React from 'react'

// const BannerBelowSection = () => {
//   return (
//     <>
//     <div className='BannerBelowsection-parent'>
//         <div className="BannerBelow-title text-center">
//             <p>OUR TEAM</p>
//             <h1>Leadership Board</h1>
//         </div>
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-md-6">
//                     <div className='absolute-image'>
//                     </div>
//                     <div className='banner-below-image-parent'>
//                         <div className='banner-below-image-parent-sub'>
//                             <img src="/images/Venkatesh-G.webp" alt="" />
//                         </div>
//                         <div className='banner-below-image-parent-content'>
//                             <h3>Venkatesh G</h3>
//                             <p>SENIOR INDUSTRIALIST</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                 <div className='absolute-image'>
//                     </div>
//                     <div className='banner-below-image-parent'>
//                         <div className='banner-below-image-parent-sub'>
//                             <img src="/images/team2.png" alt="" />
//                         </div>
//                         <div className='banner-below-image-parent-content'>
//                             <h3>RV Mohanan</h3>
//                             <p>SENIOR MANAGEMENT PROFESSIONAL</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     </>
//   )
// }

// export default BannerBelowSection;

import React, { useState } from 'react';

const BannerBelowSection = () => {
  const teamMembers = [
    {
        name: 'VENKATESH G',
        designation: 'Senior Industrialist – Civil Engineering',
        description:
          'A seasoned entrepreneur and industry expert with over 35 years of experience in construction, consultation, planning, and execution. Specialized in residential buildings, industrial structures, co-generation plants, heavy machinery foundations, and special floorings. Successfully executed projects across Bengaluru, Coimbatore, and Chennai. Approved chartered engineer, technical arbitrator, and techno-legal consultant.',
        keyStrengths: [
          'Expertise in Construction: Proficient in industrial, residential, and commercial project execution.',
          'Leadership & Planning: Skilled in managing teams and overseeing end-to-end project lifecycle.',
          'Technical Excellence: Extensive experience in specialized structures and utilities.',
          'Professional Credentials: Chartered engineer and trusted consultant in technical arbitration and legal matters.',
        ],
        coreCompetencies: [
          'Project Management & Execution',
          'Industrial and Residential Construction',
          'Techno-legal Consultation',
          'Specialized Floorings & Foundations',
          'Team Leadership & Coordination',
        ],
        image: '/images/Venkatesh-G.webp',
      },
    // {
    //   name: 'R V Mohanan',
    //   designation: 'Senior Management Professional - Civil Engineering',
    //   description:
    //     'Seasoned professional with 30+ years of experience in Project Management, Techno-commercial activities, Business Development, and Execution. Proven expertise in team building, negotiation, and coordination, with strong capabilities in liaising with government authorities, architects, and design teams for diverse projects.',
    //   keyStrengths: [
    //     'Leadership: Skilled in team management and decision-making.',
    //     'Coordination: Effective in liaising with architects, consultants, and government agencies.',
    //     'Compliance: Ensures adherence to regulatory approvals and standards.',
    //     'Business Acumen: Proficient in project pricing, planning, and marketing.',
    //   ],
    //   coreCompetencies: [
    //     'Project Management & Execution',
    //     'Techno-commercial Planning',
    //     'Business Development & Negotiation',
    //     'Regulatory Compliance',
    //     'Team Leadership & Coordination',
    //   ],
    //   image: '/images/team2.png',
    // }
  ];

  return (
    <div className="BannerBelowsection-parent">
      <div className="BannerBelow-title text-center">
        <p>OUR TEAM</p>
        <h1>Leadership Board</h1>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => {
            return (
              <div className="col-md-6" key={index}>
                <div className="absolute-image"></div>
                <div className="banner-below-image-parent">
                  <div className="banner-below-image-parent-sub">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="banner-below-image-parent-content">
                    <h3>{member.name}</h3>
                    <p>{member.designation}</p>
                    <p>
                      {member.description ? member.description : ""}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerBelowSection;
