import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Button } from "../../Gbutton";
import "./property.css";

const Property = ({ propertyData }) => {
  const { url } = useRouteMatch();
  return (
    <div className="property">
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Our Properties</h2>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5 pl-3 pr-3">
        <div className="property-wrap">
          {propertyData.map((property) => {
            const { image, price, location, name, id, type } = property;
            return (
              <div className="card" key={id}>
                <div className="img-card">
                  <NavLink to={`${url}/${name}`} title={name}>
                    <img
                      src={image}
                      alt="luxury real estate property"
                      className="img-fluid"
                    />
                  </NavLink>
                </div>
                <div className="card-content pl-3 pr-3 pt-4 pb-3">
                  <div className="d-flex justify-content-start">
                    <Button btn_property="true">{type}</Button>
                  </div>
                  <div className="text-center pt-2 pb-3">
                    <h3>{name}</h3>
                    <p>
                      <i className="fas fa-map-marker-alt pr-1"></i>
                      <span>{location}</span>
                    </p>
                    <h5>&#8358;{price}</h5>
                  </div>

                  <NavLink
                    to={`${url}/${name}`}
                    className="btn btn-outline-primary btn-block pro-link"
                  >
                    Read More{" "}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Property;
