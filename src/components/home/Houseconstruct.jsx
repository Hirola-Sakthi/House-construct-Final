import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import MarqueeText from "./MarqueeText";

const Houseconstruct = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY + 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect();
        // const top = ref.current.offsetTop  + window.scrollY
        const windowHeight = window.innerHeight;
        setIsVisible(top.top > windowHeight);
      }
    };

    handleVisibility();
    window.addEventListener("scroll", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const fadeSlideAnimation = useSpring({
    opacity: isVisible ? 0 : 1,
    transform: isVisible ? "translateY(-50%)" : "translateY(0%)",
    from: { opacity: 0, transform: "translateY(-50%)" },
    config: { duration: 800 },
  });
  return (
    <>
      <div className="housecontruct-page">
        <div className="housecontruct-page-sub">
          <div className="">
            <div className="housecontruct-page-heading">
              <h2>Why Choose House Construct...?</h2>
              <p>
                <strong>27+ Years of Crafting Exceptional
Living Spaces :</strong>{" "}
                House Construct is one of the oldest construction company with our expertise of more than 2 decades in creating exceptional living spaces.
              </p>
            </div>
            <div className="row p-0 m-0" style={fadeSlideAnimation} ref={ref}>
              <div className="col-md-4 p-0">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        className="iconimg"
                        src="/images/card-1.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>No Subcontracting</h3>
                      <p>
                      From design till the handover of your keys our in-house team makes sure that you
have a seamless journey.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4 p-0">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        className="iconimg"
                        src="/images/card-2.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>Micro Payment System</h3>
                      <p>
                      Paying for your dream home is made easy with our micro payment system, ensuring you have full control of your finances throughout the project.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4 p-0">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        className="iconimg"
                        src="/images/card-3.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>No Delay Policy</h3>
                      <p>
                      We have zero tolerances towards delay and if there is any delay in handover we
will pay a penalty.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4 p-0">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        className="iconimg"
                        src="/images/card-4.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>410+ unique quality checks</h3>
                      <p>
                      quality checks so intense that you can easily track and build a monument
at your fingertips.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4 p-0">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        className="iconimg"
                        src="/images/card-5.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>10-Year Warranty</h3>
                      <p>
                      We stand by our work. That's why we offer a 10-year warranty with lifetime service assistance, ensuring your peace of mind for the long haul.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
              <div className="col-md-4 p-0">
                <animated.div style={fadeSlideAnimation}>
                  <div className="house-const-card" ref={ref}>
                    <div className="house-const-card-img">
                      <img
                        className="iconimg"
                        src="/images/card-6.png"
                        alt="Why Choose House Construct"
                      />
                    </div>
                    <div className="house-const-card-text">
                      <h3>Absolute Transparency</h3>
                      <p>
                        We take pride in our unwavering commitment to transparency. We believe in clear communication, and open collaboration with our clients.
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
        {/* <MarqueeText /> */}
      </div>
    </>
  );
};

export default Houseconstruct;