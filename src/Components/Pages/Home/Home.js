import React from "react";
import "aos/dist/aos.css";
import Testimonial from "../../Testimonials/Testimonial";
import "./Home.css";
import OverView from "./OverView";
import Intro from "./Intro";
import { Button } from "../../Gbutton";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../../Animation/animation";

function Home() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
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
    </motion.div>
  );
}

export default Home;
