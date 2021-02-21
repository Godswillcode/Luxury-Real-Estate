import React from "react";
import "./AboutLuxury.css";
import Features from "./Features";
import Testimonial from "../../Testimonials/Testimonial";
import "aos/dist/aos.css";
import OurTeam from "./OurTeam";
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../../../Animation/animation';

function AboutLuxury() {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo} transition={transition} >
    <div className="bg-white">
        {/* Banner */}
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>About Luxury</h2>
        </div>
      </div>

      <div className="container">
        <div className="row about">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
            <div className="about-img">
              <img
                src="images/about.png"
                alt="about luxury"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-3">
            <div className="about-content">
              <h3>
                Our <span>COMPANY</span>
              </h3>
              <p>
              Our top notch professionals in the built environment attend to all details leaving no stone untouched in ensuring delivery of beautiful homes that are budget friendly.
              </p>

              <p>
              We are equipped with up to date industry cutting edge knowledge, we simply make Real Estate simple be you an investor or a vendor.
              Our top notch professionals in the built environment attend to all details leaving no stone untouched in ensuring delivery of beautiful homes that are budget friendly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Components */}
      <Features />
      <OurTeam/>
      <Testimonial />
    </div>
    </motion.div>
  );
}

export default AboutLuxury;
