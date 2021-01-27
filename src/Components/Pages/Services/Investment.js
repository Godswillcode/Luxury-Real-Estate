import React, { useEffect } from "react";
import { Button } from "../../Gbutton";
import Aos from "aos";
import "aos/dist/aos.css";


function Investment() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <div>
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Our Investment</h2>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row invest-content" data-aos="zoom-in">
          <div className="col-lg-6">
            <div className="invest-content-wrap">
              <h3>Real Estate Investment</h3>
              <p>
                We invest in our portfolio of rented buildings in the US and
                manage your money for returns through rent and capital
                appreciation.
              </p>
              <p>
                {" "}
                <strong>
                  Historical returns: 15% per annum Risk Level: Medium
                </strong>
              </p>
              <Button href="#invest">Start Investing</Button>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="/images/services/investment-1.jpg"
              alt="investment"
              className="img-fluid"
            />
          </div>
        </div>

        {/* investment process */}
        <div className="invest-process-container">
          <div className="invest-process-title text-center">
            <h3>Our Real Estate Investment Process</h3>
          </div>

          <div className="invest-process">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="desc-wrap">
                  <p>
                    We buy or rent high demand properties in the US below market
                    value to ensure investments are profitable.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="desc-wrap">
                  <p>
                    We rent out or sell those properties on the open Lagos market
                    and pay your returns.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="desc-wrap">
                  <p>
                    Each property is divided into 10,000 investment units and
                    priced at #100,000 each.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="desc-wrap">
                  <p>
                    Our Lagos properties are insured against loss, damage and loss
                    of rental income.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="desc-wrap">
                  <p>
                    The rental and maintenance of the properties are handled by
                    carefully selected property managers so you never have to
                    worry about the safety of your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-why" data-aos="fade-up">
          <div className="our-why-title text-center">
            <h3>Why Invest in Real Estate with Luxury?</h3>
          </div>
            <div className="row">
                 <div className="col-lg-4 col-sm-12">
                     <div className="our-why-content">
                        <img src="images/services/3.png" alt="why invest"/>
                         <h4>Our Focus</h4>
                         <p>Our focus is investing in Nigerian properties with the best price to rent ratio and maximize your returns on investment.</p>
                     </div>
                 </div>
                 <div className="col-lg-4 col-sm-12">
                     <div className="our-why-content">
                        <img src="images/services/1.png" alt="why invest"/>
                         <h4>Our Relationship</h4>
                         <p>Our relationship with leading Nigeria service providers and being active in the market allows us to deliver a smooth investing process and increase your earnings.</p>
                     </div>
                 </div>
                 <div className="col-lg-4 col-sm-12">
                     <div className="our-why-content">
                        <img src="images/services/2.png" alt="why invest"/>
                         <h4>The Management</h4>
                         <p>We manage all the paperwork and personnel issues to reduce the stress involved with property investments</p>
                     </div>
                 </div>
            </div>
        </div>
            <div className="d-flex justify-content-center" data-aos="fade-up">
            <div className="get-luxury" id="invest">
          <div className="row">
            <div className="col-lg-6">
                <h3>Get Luxury and start investing</h3>
                <div className="img-wrap d-flex justify-content-around align-items-baseline text-center">
                 <a href="#!"> <img src="images/services/play-store-badge.png" alt="Google play" className="google-play"/></a>
                  <a href="#!"> <img src="images/services/app-store-badge.png" alt="App store" className="app-store"/></a>
                </div>
            </div>
            <div className="col-lg-6">
               <div className="phone text-center">
               <img src="images/services/phone.png" alt="phone" className="img-fluid"/>
               </div>
            </div>
          </div>
        </div>
            </div>
      </div>
    </div>
  );
}

export default Investment;
