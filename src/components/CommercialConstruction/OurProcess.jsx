import React, { useState, useRef } from 'react';
import { Steps, theme } from 'antd';
import { Link } from 'react-router-dom';

const steps = [
    {
        title: 'First Interaction',
        content: 'Clients requirements are clearly noted.',
        content2: 'Educating our clients to help them build their planned project.',
        imageUrl: '/commercialconstruction/Raise-A-Request.png'
    },
    {
        title: 'Technical Discussion',
        content:'Our technical experts thoroughly evaluate the projects feasibility and provide expert opinions.',
        content2: 'The team offers a detailed quote based on the individual requirements of each client.',
        imageUrl: '/commercialconstruction/qualityimage.png'
    },
    {
        title: 'Design & Planning',
        content: 'We engage in brainstorming sessions to craft a final plan that aligns perfectly with custom expectations.',
        content2: 'We present multiple design options until the client is fully satisfied with the designs delivered by our in-house team.',
        imageUrl: '/commercialconstruction/designs.webp'
    },
    {
        title: 'Schedule & Contract',
        content: 'We prepare the schedule and contracts with utmost transparency and accuracy.',
        content2:'Our in-house team of architects presents a range of design options until the consumer is pleased with the final choice.',
        imageUrl: '/commercialconstruction/bookwithus.webp'
    },
    {
        title: 'Manage Construction',
        content:'410+ unique quality checks and inspections by our team of experts.',
        content2:"In-House project management systems to assure quality and timelines are under control.",
        imageUrl: '/commercialconstruction/Track-Transact.png'
    },
    {
        title: 'Handover',
        title2:'Project is handed over to the client.',
        content: 'Your dream home is ready! Built with care and precision, we’re thrilled to hand over this beautifully crafted space.',
        content2:"",
        imageUrl: '/commercialconstruction/settlein.jpg',
        contentlink: 'Terms and Conditions Apply'
    }
];

const OurProcess = ({openModal}) => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const contentRef = useRef(null);

    const onChange = (value) => {
        setCurrent(value);
    };

    const handleDrag = (event) => {
        const contentElement = contentRef.current;
        let { clientX: startX } = event;

        const handleMouseMove = (moveEvent) => {
            const currentX = moveEvent.clientX;
            const diffX = currentX - startX;

            if (diffX > 50 && current > 0) {
                setCurrent(current - 1); // Navigate to previous step
                startX = currentX; // Reset start position for next drag
            } else if (diffX < -50 && current < steps.length - 1) {
                setCurrent(current + 1); // Navigate to next step
                startX = currentX; // Reset start position for next drag
            }
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };


    return (
        <div className="OurProcess-component-parent">
        <div className="container">
            <div className="OurProcess-title">
                <h1> Our Process</h1>
                <p>Our construction steps are simple and easy to understand :</p>
                <h5>Plan - Build - Track - Kickstart Your Dream House</h5>
            </div>
            <div style={{ marginBottom: 24 }}>
                <div className='OurProcess-steps-parent'>
                <Steps current={current} onChange={onChange}  labelPlacement="vertical">
                    {steps.map((item) => (
                        <Steps.Step key={item.title} 
                        title={item.title}
                        />
                    ))}
                </Steps>
                </div>
                <div
                    ref={contentRef}
                    onMouseDown={handleDrag}
                    onMouseMove={(e) => e.preventDefault()}
                >
                    {current === 0 && (
                        <div className='OurProcess-main-parent'>
                            {/* <div className='OurProcess-main-image' style={{ textAlign: 'center', marginTop: 24, marginBottom: 30 }}>
                                <img src={steps[0].imageUrl} alt="Your Image" style={{ maxWidth: '100%', height: '300px' }} />
                            </div> */}
                            <div className='Process-content-parent'>
                                <div className='Process-content-sub'>
                                    <strong>{steps[0].title2} </strong>
                                    <p>{steps[0].content} </p>
                                    <p>{steps[0].content2} </p>
                                </div>
                                <Link onClick={openModal}>Let's Build</Link>
                            </div>
                        </div>
                    )}
                    {
                        current === 1 && (
                            <div className='OurProcess-main-parent'>
                                {/* <div className='OurProcess-main-image' style={{ textAlign: 'center', marginTop: 24, marginBottom: 30 }}>
                                    <img src={steps[1].imageUrl} alt="Your Image" style={{ maxWidth: '100%', height: '300px' }} />
                                </div> */}
                                <div className='Process-content-parent'>
                                    <div className='Process-content-sub2'>
                                        <p>{steps[1].title2} </p>
                                        <p>{steps[1].content} </p>
                                        <p>{steps[1].content2} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        current === 2 && (
                            <div className='OurProcess-main-parent'>
                                {/* <div className='OurProcess-main-image' style={{ textAlign: 'center', marginTop: 24, marginBottom: 30 }}>
                                    <img src={steps[2].imageUrl} alt="Your Image" style={{ maxWidth: '100%', height: '300px' }} />
                                </div> */}
                                <div className='Process-content-parent'>
                                    <div className='Process-content-sub2'>
                                        <p>{steps[2].title2} </p>
                                        <p>{steps[2].content} </p>
                                        <p>{steps[2].content2} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        current === 3 && (
                            <div className='OurProcess-main-parent'>
                                {/* <div className='OurProcess-main-image' style={{ textAlign: 'center', marginTop: 24, marginBottom: 30 }}>
                                    <img src={steps[3].imageUrl} alt="Your Image" style={{ maxWidth: '100%', height: '300px' }} />
                                </div> */}
                                <div className='Process-content-parent'>
                                    <div className='Process-content-sub2'>
                                        <p>{steps[3].title2} </p>
                                        <p>{steps[3].content} </p>
                                        <p>{steps[3].content2} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        current === 4 && (
                            <div className='OurProcess-main-parent'>
                                {/* <div className='OurProcess-main-image' style={{ textAlign: 'center', marginTop: 24, marginBottom: 30 }}>
                                    <img src={steps[4].imageUrl} alt="Your Image" style={{ maxWidth: '100%', height: '300px' }} />
                                </div> */}
                                <div className='Process-content-parent'>
                                    <div className='Process-content-sub2'>
                                        <p>{steps[4].title2} </p>
                                        <p>{steps[4].content} </p>
                                        <p>{steps[4].content2} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        current === 5 && (
                            <div className='OurProcess-main-parent'>
                                {/* <div className='OurProcess-main-image' style={{ textAlign: 'center', marginTop: 24, marginBottom: 30 }}>
                                    <img src={steps[5].imageUrl} alt="Your Image" style={{ maxWidth: '100%', height: '300px' }} />
                                </div> */}
                                <div className='Process-content-parent'>
                                    <div className='Process-content-sub2'>
                                        <p>{steps[5].title2} </p>
                                        <p>{steps[5].content} </p>
                                        <p>{steps[5].content2} </p>
                                        <p><Link to="/terms-and-conditions">{steps[5].contentlink} </Link></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        </div>

    );
};

export default OurProcess;
