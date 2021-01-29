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
       Hero Picture background
    ============================== */}
      <div id="hero">
        <div className="outer d-flex justify-content-center align-items-center">
          <div className="detail text-center text-white container">
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
      </div>

      {/* Components */}
      <Intro />
      <OverView />
      <Testimonial />
    </>
  );
}

export default Home;
