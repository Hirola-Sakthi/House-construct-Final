import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowUpRight } from 'react-feather'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import projectData from '../../assets/data/projects.json';
import slugify from 'slugify';
const ServiceShowcase = () => {
    const data = projectData; // Slice to get the first 6 items from projectData
    const slugifyTitle = (title) => {

        return slugify(title, { lower: true, replacement: '-', remove: /[*+~.()'"!:@]/g }) + "-new";
    };
    return (
        <>
            <div className='service-showcase-parent'>
                <div className="service-showcase-subparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='work-space-rich'>
                                    <h6>WHAT WE DO</h6>
                                    <h1>Works Showcase</h1>
                                    <p>With a rich history of successful projects, House Construct has excelled in constructing homes and
                                        commercial spaces, while also leading the way in architectural and structural design. Our expertise extends to interior
                                        planning, ensuring your spaces are both functional and aesthetically pleasing. We’ve built a legacy of turning
                                        visions into reality, one project at a time.</p>
                                    <div className="button-style">
                                        <button className='WhoweraeAbout-sub-viewmore-button'>
                                            <Link to="/contact-us">View More</Link>
                                            <ArrowUpRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='showcase-slide-images'>
                                    <>
                                        <Swiper
                                            slidesPerView={2}
                                            centeredSlides={true}
                                            spaceBetween={30}
                                            freeMode={true}
                                            autoplay={true}
                                            delay={3000}
                                            navigation={true}
                                            modules={[Autoplay, Navigation]}
                                            className="mySwiper"
                                            breakpoints={{
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                                480: {
                                                    slidesPerView: 1,
                                                },
                                                576: {
                                                    slidesPerView: 1,
                                                },
                                                900: {
                                                    slidesPerView: 2,
                                                },
                                                1300: {
                                                    slidesPerView: 2,
                                                }
                                            }}

                                        >
                                            {data.map((info,index)=>(
                                            <SwiperSlide><div>
                                            <img src={info.img} alt={info.title} />
                                            <div className='Construction-details-page'>
                                                <h6>{info.title}</h6>
                                                <h1>{info.project}</h1>
                                                <div className="button-style">
                                                    <div className="button-page">
                                                    <Link to={`/portfolio/${slugifyTitle(info.title)}`}>VIEW MORE</Link>
                                                        <img src="/serimg/Icon.svg" width={20} height={20} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div></SwiperSlide>
                                            ) )}
                                        </Swiper>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceShowcase