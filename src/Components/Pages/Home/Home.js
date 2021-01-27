import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "../../Testimonials/Testimonial";
import "./Home.css";
import OverView from "./OverView";
import Intro from "./Intro";
import { Button } from "../../Gbutton";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      {/* ============================
       Hero Video background
    ============================== */}
      <div className="v-header">
        <div className="fullscreen-video-wrap">
          <video autoPlay loop muted>
            <source src="video/hey.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-overlay"></div>
        <div className="video-content container text-center" data-aos="zoom-in">
          <h1>Find Your Dream Home</h1>
          <p>
            Luxury offer you simplified, rewarding, and secured homes
            <br /> We're your local source for affordable homes.
          </p>
          <Button heroBtn href="#overView">
            Find Out More
          </Button>
        </div>
      </div>

      {/* Components */}
      <Intro />
      <OverView />
      <Testimonial />
    </>
  );
}

export default Home;
