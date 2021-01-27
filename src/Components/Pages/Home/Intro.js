import React, { useEffect } from "react";
import "./intro.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Intro() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="intro-wrapper">
      <div className="container">
        <div className="section-header">
          <h2>What we do</h2>
          <p>Here are some of our services</p>
        </div>
      </div>

      <div className="service" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
              <Services
                image="images/icons/4.png"
                title="New Projects"
                info="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet."
              />
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
              <Services
                image="images/icons/1.png"
                title="Plots for Sale"
                info="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet."
              />
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
              <Services
                image="images/icons/2.png"
                title="Luxury Villas"
                info="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet."
              />
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
              <Services
                image="images/icons/3.png"
                title="Rent a House"
                info="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services({ image, title, info }) {
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center pb-3">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default Intro;
