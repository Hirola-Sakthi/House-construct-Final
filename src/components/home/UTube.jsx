/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Videopopup from "./Videopopup";

export default function UTube() {
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  // const [url, seturl] = useState(second)
  const swiperRef = useRef(null);

  useEffect(() => {
    // Enable autoplay after 3 seconds
    const timer = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.autoplay.start();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setModalOpen(true);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  // const handleVideoClick = (videoUrl) => {
  //   setSelectedVideoUrl(videoUrl);
  //   setModalOpen(true);
  //   if (swiperRef.current ) {
  //     swiperRef.current.autoplay.stop();
  // }
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  //   setSelectedVideoUrl("");
  // };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVideoUrl("");
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <>
      <div className="utube-parent">
        <div className="utube-subparent">
          <Swiper
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true
          }}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 4 },
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide
              onClick={() =>
                handleVideoClick(
                  "https://www.youtube.com/embed/3GUawR6G1AU?si=ad5hevus9LltkPT6"
                )
              }
            >
              <div className="thumbnail-image-parent">
                <img
                  className="thumbnail-image-subparent"
                  src="/youtubethumbnail/client8.jpg"
                  alt=""
                />
                <img
                  className="youtube-icon"
                  onClick={() =>
                    handleVideoClick(
                      "https://www.youtube.com/embed/3GUawR6G1AU?si=ad5hevus9LltkPT6"
                    )
                  }
                  src="youtube.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={() =>
                handleVideoClick(
                  "https://www.youtube.com/embed/WSz1QLBfTSk?si=fv22uvwDwGxTlIEo"
                )
              }
            >
              <div className="thumbnail-image-parent">
                <img
                  className="thumbnail-image-subparent"
                  src="/youtubethumbnail/client2.png"
                  alt=""
                />
                <img
                  className="youtube-icon"
                  onClick={() =>
                    handleVideoClick(
                      "https://www.youtube.com/embed/WSz1QLBfTSk?si=fv22uvwDwGxTlIEo"
                    )
                  }
                  src="youtube.png"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() =>
                handleVideoClick(
                  "https://www.youtube.com/embed/vt5hIrsWnxQ?si=Pv2GUj_VIt0KyJnB"
                )
              }
            >
               <div className="thumbnail-image-parent">
                <img
                  className="thumbnail-image-subparent"
                  src="/youtubethumbnail/client3.png"
                  alt=""
                />
                <img
                  className="youtube-icon"
                  onClick={() =>
                    handleVideoClick(
                      "https://www.youtube.com/embed/vt5hIrsWnxQ?si=Pv2GUj_VIt0KyJnB"
                    )
                  }
                  src="youtube.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={() =>
                handleVideoClick(
                  "https://www.youtube.com/embed/9i6nlwqfZU8?si=znWhSZb354Ll2bxm"
                )
              }
            >
              <div className="thumbnail-image-parent">
                <img
                  className="thumbnail-image-subparent"
                  src="/youtubethumbnail/client4.png"
                  alt=""
                />
                <img
                  className="youtube-icon"
                  onClick={() =>
                    handleVideoClick(
                      "https://www.youtube.com/embed/9i6nlwqfZU8?si=znWhSZb354Ll2bxm"
                    )
                  }
                  src="youtube.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={() =>
                handleVideoClick(
                  "https://www.youtube.com/embed/iwANwd62UCI?si=Xub3Q9WbO2tYelB1"
                )
              }
            >
              <div className="thumbnail-image-parent">
                <img
                  className="thumbnail-image-subparent"
                  src="/youtubethumbnail/client5.png"
                  alt=""
                />
                <img
                  className="youtube-icon"
                  onClick={() =>
                    handleVideoClick(
                      "https://www.youtube.com/embed/iwANwd62UCI?si=Xub3Q9WbO2tYelB1"
                    )
                  }
                  src="youtube.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={() =>
                handleVideoClick(
                  "https://www.youtube.com/embed/JNE87x_1AD4?si=RjJydrVPs92ATBbv"
                )
              }
            >
              <div className="thumbnail-image-parent">
                <img
                  className="thumbnail-image-subparent"
                  src="/youtubethumbnail/client1.png"
                  alt=""
                />
                <img
                  className="youtube-icon"
                  onClick={() =>
                    handleVideoClick(
                      "https://www.youtube.com/embed/JNE87x_1AD4?si=RjJydrVPs92ATBbv"
                    )
                  }
                  src="youtube.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={() =>
                handleVideoClick(
                  "https://www.youtube.com/embed/VjvPex6_4cY?si=r2ukmO1HPm79Qrbm"
                )
              }
            >
             <div className="thumbnail-image-parent">
                <img
                  className="thumbnail-image-subparent"
                  src="/youtubethumbnail/client7.png"
                  alt=""
                />
                <img
                  className="youtube-icon"
                  onClick={() =>
                    handleVideoClick(
                      "https://www.youtube.com/embed/VjvPex6_4cY?si=r2ukmO1HPm79Qrbm"
                    )
                  }
                  src="youtube.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {modalOpen && (
        <Videopopup
          videoUrl={selectedVideoUrl}
          isOpen={modalOpen}
          setModalOpen={setModalOpen}
          setSelectedVideoUrl={setSelectedVideoUrl}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
