import React from "react";
import "./services.css";

function RealEstate() {
  return (
    <div>
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Our Real Estate Services</h2>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="service-item">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="service-item__img">
                <img
                  src="/images/services/hire-purchase.jpg"
                  alt="service"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="service-item__content text-center">
                <h4 className="service-item__title">
                  REAL ESTATE HIRE-PURCHASE
                </h4>
                <p className="service-item__desc">
                  Do you have a landed property for hire-purchase business,
                  don’t deal with terrible agents or lawyers, sell your property
                  to us for twice its value why we remit payment to you
                  quarterly or yearly for 36 months. You make 100% profit.
                </p>
                <p className="service-item__desc">
                  Ownership transfer is made after full payment of the property.
                </p>
                <p className="service-item__desc">
                  Luxury is the smartest way to start your landed property
                  hire-purchase business.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-item">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="service-item__img">
                <img
                  src="/images/services/make-over.jpg"
                  alt="service"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="service-item__content text-center">
                <h4 className="service-item__title">REAL ESTATE MAKE-OVER</h4>
                <p className="service-item__desc">
                  Luxury Realties offers make-over opportunities to property
                  owners interested in remodeling or completing development of
                  their property.
                </p>

                <p className="service-item__desc">
                  {" "}
                  Do you have a good title property? let us remodel or complete
                  the development for you, while you forget the hassles of
                  looking for the money. Afterwards, we earn rent for an agreed
                  number of years if on rental or get a percentage of the
                  selling cost if sold.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-item">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="service-item__img">
                <img
                  src="/images/services/management.jpg"
                  alt="service"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="service-item__content text-center">
                <h4 className="service-item__title">REAL ESTATE MANAGEMENT</h4>
              

                <p className="service-item__desc">
                Investments without proper monitoring and management are simply nothing but waste – literally throwing away hard earned resources into the winds.
                </p>
                <p className="service-item__desc">
                At LUXURY, we partner with our clients all the way to avoid this. From land purchase to property development to managing (valuing, pricing, letting, leasing, maintaining etc) on behalf of our net worth clients, LUXURY continues partnering with her clients in pursuit of value creation, preservation and growth.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="service-item">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="service-item__img">
                <img
                  src="/images/services/building.jpg"
                  alt="service"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="service-item__content text-center">
                <h4 className="service-item__title">BUILDING & CONSTRUCTION</h4>
                <p className="service-item__desc">
                We develop and sell high quality genuine real estate properties at prime locations with focus on comfort and capital appreciation. At FOAN, we don’t just sell promises, we create your dream real estate.
                </p>

                <p className="service-item__desc">
                  {" "}
                  We also have a roadmap to develop (for outright sales) different categories of residential and commercial buildings partnering with some financial institutions to provide mortgage and financing facilities to eligible customers. It is part of our civil role to contribute to the infrastructural development of Nigeria.
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
