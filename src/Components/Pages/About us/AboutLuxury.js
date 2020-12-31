import React, { useEffect } from "react";
import "./AboutLuxury.css";
import Features from "./Features";
import Testimonial from "../../Testimonials/Testimonial";
import Aos from "aos";
import "aos/dist/aos.css";
import OurTeam from "./OurTeam";

function AboutLuxury() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
      
  return (
    <div className="bg-white">

        {/* Banner */}
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>About Luxury</h2>
        </div>
      </div>

      <div className="container">
        <div className="row about" data-aos="zoom-in">
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
                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Vivamus suscipit tortor eget felis
                porttitor volutpat. Cras ultricies ligula sed magna dictum
                porta. Mauris blandit aliquet elit, eget tincidunt nibh
                pulvinar.
              </p>

              <p>
                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo..
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
  );
}

export default AboutLuxury;
