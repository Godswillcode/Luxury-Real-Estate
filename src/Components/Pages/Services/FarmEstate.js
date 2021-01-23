import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function FarmEstate() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <div>
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Our Farm Estate</h2>
        </div>
      </div>

      <div className="container farm-estate">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
               <div className="farm-img">
               <img src="/images/services/farm-estate.jpg" alt="farm estate" className="img-fluid" data-aos="zoom-in"/>
               </div>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <hr/>
                <div className="farm-content-wrap">
                    <div className="farm-estate-item">
                    <div className="farm-estate-title">
                        <h2>Services</h2>
                    </div>
                    <ul>
                      <li> <i className="fas fa-arrow-right"></i> Land acquisition, clearing and preparation for planting</li>
                      <li> <i className="fas fa-arrow-right"></i> Farm management services</li>
                      <li> <i className="fas fa-arrow-right"></i> Flexible payment plan</li>
                    </ul>
                    </div>

                    <div className="farm-estate-item">
                    <div className="farm-estate-title">
                        <h2>Opportunities</h2>
                    </div>
                    <ul>
                      <li> <i className="fas fa-arrow-right"></i> Access to Central Bank of Nigeria anchor borrowers fund</li>
                      <li> <i className="fas fa-arrow-right"></i> Membership of the produce export cluster group</li>
                      <li> <i className="fas fa-arrow-right"></i>Access to a structured Market with produce end-users</li>
                    </ul>
                    </div>

                    <div className="farm-estate-item">
                    <div className="farm-estate-title">
                        <h2>Model Farm</h2>
                    </div>
                        <div className="pl-4 pt-3">
                          <p>Luxury Park Model Farm is an experimental farm in which research and demonstrated improvements in agricultural techniques, efficiency and building layout are carried out.</p>
                          <p>Our objective is to impact prospective and practicing farmers with the needed practical knowledge of new farming initiatives and also make sure that our visitors leave with an interesting experience of modern day agriculture.</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default FarmEstate;
