import React from 'react'
import { Link } from 'react-router-dom'

const CurrentOpenings = () => {
  return (
    <>
    <div className='CurrentOpenings-parent'>
        <div className="container-lg container-xl container-xxl">
            <h2>CURRENT OPENINGS</h2>
            <div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="CurrentOpenings-sub">
                    <div className='CurrentOpenings-sub-sub'>
                        <button>Full Time</button>
                        <p>Bangalore</p>
                    </div>
                    <h5>Site Engineer</h5>
                    {/* <h6>Responsibilities:</h6>
                    <ul>
                        <li>Oversee construction projects</li>
                        <li>Ensure projects are completed on time and within budget</li>
                    </ul>
                    <h6>Skills Required:</h6>
                    <ul>
                        <li>Strong background in civil engineering</li>
                        <li>Project management skills</li>
                    </ul> */}
                    <Link to='/contact-us' className='apply-btn'>Apply Now</Link>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="CurrentOpenings-sub">
                <div className='CurrentOpenings-sub-sub'>
                        <button>Full Time</button>
                        <p>Bangalore</p>
                    </div>
                    <h5>Sales Executive</h5>
                    {/* <div className="card-content">
                        <h6>Responsibilities:</h6>
                        <ul>
                            <li>Develop and maintain client relationships</li>
                            <li>Generate leads and close sales</li>
                            <li>Provide regular sales reports to management</li>
                        </ul>
                        <h6>Skills Required:</h6>
                        <ul>
                            <li>Excellent communication and negotiation skills</li>
                            <li>Proven track record in sales</li>
                        </ul>
                    </div> */}
                    <Link to='/contact-us' className='apply-btn'>Apply Now</Link>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="CurrentOpenings-sub">
                <div className='CurrentOpenings-sub-sub'>
                        <button>Full Time</button>
                        <p>Bangalore</p>
                    </div>
                    <h5>Project Manager</h5>
                    {/* <div className="card-content">
                        <h6>Responsibilities:</h6>
                        <ul>
                            <li>Plan and execute project timelines</li>
                            <li>Coordinate with stakeholders</li>
                            <li>Manage project budgets</li>
                        </ul>
                        <h6>Skills Required:</h6>
                        <ul>
                            <li>Strong leadership and organizational skills</li>
                            <li>Experience in project management methodologies</li>
                        </ul>
                    </div> */}
                    <Link to='/contact-us' className='apply-btn'>Apply Now</Link>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="CurrentOpenings-sub">
                <div className='CurrentOpenings-sub-sub'>
                        <button>Full Time</button>
                        <p>Bangalore</p>
                    </div>
                    <h5>Accountant</h5>
                    {/* <div className="card-content">
                        <h6>Responsibilities:</h6>
                        <ul>
                            <li>Manage financial records and transactions</li>
                            <li>Prepare and analyze financial statements</li>
                            <li>Assist with budgeting and forecasting</li>
                        </ul>
                        <h6>Skills Required:</h6>
                        <ul>
                            <li>Strong attention to detail</li>
                            <li>Proficiency in accounting software</li>
                            <li>Knowledge of financial regulations</li>
                        </ul>
                    </div> */}
                    <Link to='/contact-us' className='apply-btn'>Apply Now</Link>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="CurrentOpenings-sub">
                <div className='CurrentOpenings-sub-sub'>
                        <button>Full Time</button>
                        <p>Bangalore</p>
                    </div>
                    <h5>Architect</h5>
                    {/* <div className="card-content">
                        <h6>Responsibilities:</h6>
                        <ul>
                            <li>Design and plan architectural projects</li>
                            <li>Prepare and present design proposals</li>
                            <li>Collaborate with clients and construction teams</li>
                        </ul>
                        <h6>Skills Required:</h6>
                        <ul>
                            <li>Proficiency in architectural software</li>
                            <li>Strong design and spatial awareness</li>
                            <li>Knowledge of building codes and regulations</li>
                        </ul>
                    </div> */}
                    <Link to='/contact-us' className='apply-btn'>Apply Now</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CurrentOpenings