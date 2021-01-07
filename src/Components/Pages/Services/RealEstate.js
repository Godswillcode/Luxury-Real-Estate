import React from "react";
import './services.css'

function RealEstate() {
  return (
    <div>
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Our Real Estate Services</h2>
        </div>
      </div>

      <div className="container">
        <div className="service-item">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 mb-10">
              <div className="service-item__img">
                <img
                  src="assets/images/services/bulk land.png"
                  alt="service"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mb-10">
              <div className="service-item__content text-center">
                <h4 className="service-item__title">REAL ESTATE HIRE-PURCHASE</h4>
                <p className="service-item__desc">
                Do you have a landed property for hire-purchase business, don’t deal with terrible agents or lawyers, sell your property to us for twice its value why we remit payment to you quarterly or yearly for 36 months. You make 100% profit.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstate;
