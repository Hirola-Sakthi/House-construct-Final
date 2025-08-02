import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { EffectCreative } from 'swiper/modules';
import backgroundVideo from "/Headervideo.mp4"; 
const Banner = () => {

  useEffect(() => {
    const video = document.getElementById('background-video');
    if (video) {
      video.play(); // Start playing the video when component mounts
    }
  }, []);

  return (
    <>
      <div className="homepage-banner-parent">
        <div className="homepage-banner-subParent">
          {/* Swiper Component */}
          <div className="swiper-service-page">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-120%', 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ['120%', 0, -500],
                },
              }}
              navigation={false}
              modules={[Navigation, Autoplay, EffectCreative]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='banner-content'>
                  
          <video
            id="background-video"
            className="fullscreen-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                  <div className="banner-sub">
                    <h5 className="text-light">House Construct</h5>
                    <h2 className="text-light">Crafting Exceptional living spaces since 1997</h2>
                    {/* <p>Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p> */}
                    {/* <div className='banner-button'>
                      <Link to="/solutions">See Our Solutions</Link>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
              {/* Additional SwiperSlides */}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;