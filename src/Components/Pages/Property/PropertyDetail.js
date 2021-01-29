import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";

function PropertyDetail({ data }) {
  const { propertyName } = useParams();
  const property = data.find((p) => p.name === propertyName);
  let propertyData;

  if (property) {
    propertyData = (
      <div className="container">
        <div className="p-detail-wrap border">
          <div className="p-top d-flex justify-content-between pl-3 pr-3 pt-2 pb-3 border-bottom">
            <div>
              <h2>{property.name}</h2>
              <p className="location">
                {" "}
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>{property.location}</span>
              </p>
            </div>
            <div>
              <h5 className="price"> From &#8358;{property.price}</h5>
              <p className="type">{property.type}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <img
                src={property.image}
                alt="luxury real estate property"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-3 pt-5">
              <NavLink
                to="/contact-us"
                className="btn btn-outline-primary btn-block"
              >
                {" "}
                Tell me more about this property{" "}
              </NavLink>
            </div>
          </div>
        </div>

        {/* P bottom */}
        <div className="row">
          <div className="col-lg-9">
            <div className="p-bottom border mt-3 mb-5">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Description">
                  <div className="p-3">
                    <p className="desc">{property.desc1}</p>
                    <p className="desc">{property.desc}</p>

                    <div>
                      <span className="d-block">
                        {" "}
                        <b>Location:</b> {property.mainLocation}
                      </span>
                      <span className="d-block">
                        <b>Available: </b> {property.ADimension}
                      </span>
                      <span className="d-block">
                        <b>Title: </b> {property.title}
                      </span>
                    </div>

                    <div className="payment-plan mt-3">
                      <h3 className="payment-title">Payment plan</h3>
                      <div className="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                          <div class="single_plan shadow">
                            <div class="deal_top">
                              <h3>3 Months plan</h3>
                              <h4>
                                10 <span>%</span>
                              </h4>
                              <h5>Monthly</h5>
                            </div>

                            <div class="deal_bottom">
                              <ul class="deal_item">
                                <li>
                                  <b>AT:</b> &#8358;5,000,000 monthly
                                </li>
                                <li>
                                  <b>Initial Deposit:</b> &#8358;10,000,000
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                          <div class="single_plan shadow">
                            <div class="deal_top">
                              <h3>6 Months plan</h3>
                              <h4>
                                20 <span>%</span>
                              </h4>
                              <h5>Monthly</h5>
                            </div>

                            <div class="deal_bottom">
                              <ul class="deal_item">
                                <li>
                                  <b>AT:</b> &#8358;5,000,000 monthly
                                </li>
                                <li>
                                  <b>Initial Deposit:</b> &#8358;10,000,000
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Features">
                  <div className="p-3">
                    <ul className="pl-3 pt-4">
                      <li>1 GOOD ROADS</li>
                      <li>2 ELECTRICITY</li>
                      <li>3 PLAYGROUND</li>
                      <li>4 DRAINAGE</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Location">
                  <h2 className="p-5 text-center">GOOGLE MAP COMING SOON</h2>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-lg-3">
               
          </div>
        </div>
      </div>
    );
  } else {
    propertyData = <h2> Sorry. Property doesn't exist </h2>;
  }

  return <div>{propertyData}</div>;
}

export default PropertyDetail;
