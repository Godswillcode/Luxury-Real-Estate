import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./overView.css";
import Aos from "aos";
import "aos/dist/aos.css";

const OverView = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid overView" id="overView">
      <div className="container">
        <div className="section-header">
          <h2>Luxury Real Estate</h2>
          <p>Your trusted real estate company</p>
        </div>
      </div>
      <div className="wrapper">
      <div className="row">
        <div className="col-lg-4  pb-3 mb-sm-3">
          <OverViewDetail>
            <div className="overView_img-wrap">
              <img
                src="images/home/1.jpg"
                alt="aimart real estate"
                className="img-fluid"
              />
            </div>
            <div className="pb-3">
              <h3>Real Estate</h3>
              <p className="overView_info">
                We offer you simplified, rewarding, and secure real estate
                investing. We make real estate investments accessible to
                everyone in a way that is simple, secure, and profitable
              </p>
              <NavLink to="/realEstate" className="overView_link">
                Discover more
              </NavLink>
            </div>
          </OverViewDetail>
        </div>

        <div className="col-lg-4 pb-3 mb-sm-3">
          <OverViewDetail>
            <div className="overView_img-wrap">
              <img
                src="images/home/2.jpg"
                alt="aimart real estate"
                className="img-fluid"
              />
            </div>
            <div className="pb-3">
              <h3>FAQ'S</h3>
              <p className="overView_info">
              If you are  looking for more information? Our database of Frequently Asked Questions is filled with a lot of answers to the most pressing inquiries, we are here for you.
              </p>
              <NavLink to="/faq" className="overView_link">
                Discover more
              </NavLink>
            </div>
          </OverViewDetail>
        </div>

        <div className="col-lg-4 pb-3 mb-sm-3">
          <OverViewDetail>
            <div className="overView_img-wrap">
              <img
                src="images/home/3.jpg"
                alt="aimart real estate"
                className="img-fluid"
              />
            </div>
            <div className="pb-3">
              <h3>Our properties</h3>
              <p className="overView_info">
              The No.1 Nigerian trusted real estate and property company with property in Nigeria for sale rent and lease. We offer Nigerian property seekers an easy and cheap way to find ...
              </p>
              <NavLink to="/properties" className="overView_link">
                Discover more
              </NavLink>
            </div>
          </OverViewDetail>
        </div>
      </div>
      </div>
    </div>
  );
};

// Child component
const OverViewDetail = ({ children }) => {
  return (
    <div className="shadow overView_card" data-aos="zoom-in">
      {children}
    </div>
  );
};

export default OverView;
