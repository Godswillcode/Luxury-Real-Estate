import { Carousel } from "react-bootstrap";
import React, { useEffect } from "react";
import "./Testimonial.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="testimonial-wrap">
      <div className="container">
        <div className="section-header">
          <h2>TESTIMONIALS</h2>
          <p>Our customers review</p>
        </div>
      </div>
      <Carousel data-aos="zoom-in">
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="images/testimonialBg.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="testimonial-item">
              <img
                src="images/testimonials/2.jpg"
                alt=""
                className="testimonial-image"
              />
              <h3>Miss Florence</h3>
              <h4>Freelancer</h4>
              <p>
                <i className="fas fa-quote-left"></i>
                Luxury has been great in trying to find us our dream home. We are always provided with the most recent listings, and Brad has been fantastic in chauffeuring us to listings of interest.
                <i className="fas fa-quote-right"></i>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="images/testimonialBg.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="testimonial-item">
              <img
                src="images/testimonials/3.jpg"
                alt=""
                className="testimonial-image"
              />
              <h3>Miss Pamela</h3>
              <h4>Developer</h4>
              <p>
                <i className="fas fa-quote-left"></i>
                I am a Mortgage Broker in Victoria who has worked closely with Luxury for the past few years. He is an outstanding Realtor to work with because he not only gets the job done.
                <i className="fas fa-quote-right"></i>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="images/testimonialBg.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="testimonial-item">
              <img
                src="images/testimonials/1.jpg"
                alt=""
                className="testimonial-image"
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <i className="fas fa-quote-left"></i>
                We have been working with Brad for over a year and have been extremely happy with the service he provides. Even though we are not actively looking we always have our eye on the market and Brad never fail.
                <i className="fas fa-quote-right"></i>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="images/testimonialBg.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="testimonial-item">
              <img
                src="images/testimonials/4.jpg"
                alt=""
                className="testimonial-image"
              />
              <h3>john Brandon</h3>
              <h4>Developer</h4>
              <p>
                <i className="fas fa-quote-left"></i>
                I am a GodsWill Broker in Victoria who has worked closely with Luxury for the past few years. He is an outstanding Realtor to work with because he not only gets the job done.
                <i className="fas fa-quote-right"></i>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonial;
