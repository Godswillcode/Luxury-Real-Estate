import React from "react";
import { useParams } from "react-router-dom";
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
            <div className="col-lg-3"></div>
          </div>
        </div>

        {/* P bottom */}
        <div className="row">
          <div className="col-lg-9">
            <div className="p-bottom border mt-3 pl-3 pr-3 mb-5">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Description">
                  <p className="desc1">{property.desc1}</p>
                  <p className="desc">{property.desc}</p> 
                </Tab>
                <Tab eventKey="profile" title="Features">
                  <ul className="pl-3 pt-4">
                    <li>1 GOOD ROADS</li>
                    <li>2 ELECTRICITY</li>
                    <li>3 PLAYGROUND</li>
                    <li>4 DRAINAGE</li>
                  </ul>
                </Tab>
                <Tab eventKey="contact" title="Location">
                 <h2 className="p-5">GOOGLE MAP COMING SOON</h2>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-lg-9"></div>
        </div>
      </div>
    );
  } else {
    propertyData = <h2> Sorry. Property doesn't exist </h2>;
  }

  return <div>{propertyData}</div>;
}

export default PropertyDetail;
