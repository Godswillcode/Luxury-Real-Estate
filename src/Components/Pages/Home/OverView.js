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

      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 pb-3 mb-sm-3">
          <OverViewDetail>
            <div className="overView_img-wrap">
              <img
                src="images/home/1.jpg"
                alt="aimart real estate"
                className="img-fluid"
              />
            </div>
            <div className="pl-3 pb-3">
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

        <div className="col-lg-4 col-md-4 col-sm-12 col-12 pb-3 mb-sm-3">
          <OverViewDetail>
            <div className="overView_img-wrap">
              <img
                src="images/home/2.jpg"
                alt="aimart real estate"
                className="img-fluid"
              />
            </div>
            <div className="pl-3 pb-3">
              <h3>FAQ'S</h3>
              <p className="overView_info">
                We offer you simplified, rewarding, and secure real estate
                investing. We make real estate investments accessible to
                everyone in a way that is simple, secure, and profitable
              </p>
              <NavLink to="/faq" className="overView_link">
                Discover more
              </NavLink>
            </div>
          </OverViewDetail>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 col-12 pb-3 mb-sm-3">
          <OverViewDetail>
            <div className="overView_img-wrap">
              <img
                src="images/home/3.jpg"
                alt="aimart real estate"
                className="img-fluid"
              />
            </div>
            <div className="pl-3 pb-3">
              <h3>Our properties</h3>
              <p className="overView_info">
                We offer you simplified, rewarding, and secure real estate
                investing. We make real estate investments accessible to
                everyone in a way that is simple, secure, and profitable
              </p>
              <NavLink to="/properties" className="overView_link">
                Discover more
              </NavLink>
            </div>
          </OverViewDetail>
        </div>
      </div>
    </div>
  );
};

// Child component
const OverViewDetail = ({ children }) => {
  return(
      <div className="shadow overView_card" data-aos="zoom-in">
          {children}
      </div>
  )
};

export default OverView;
