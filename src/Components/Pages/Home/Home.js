import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "../../Testimonials/Testimonial";
import "./Home.css";
import OverView from "./OverView";
import Intro from "./Service";
import { Button } from '../../Gbutton'

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <header className="v-header mb-5">
        <div className="fullscreen-video-wrap">
          <video autoPlay loop muted width="100%">
            <source src="video/heroVideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content-wrap d-flex justify-content-center align-items-center text-center">
          <div className="header-content container" data-aos="zoom-in">
            <h1>Find Your Dream Home</h1>
            <p>
              Luxury offer you simplified, rewarding, and secured homes
              <br /> We're your local source for affordable homes.
            </p>
            <Button heroBtn href="#overView">Find Out More</Button>
          </div>
        </div>
      </header>

    {/* Components */}
      <Intro/>
      <OverView/>
      <Testimonial/>
    </>
  );
}

export default Home;
