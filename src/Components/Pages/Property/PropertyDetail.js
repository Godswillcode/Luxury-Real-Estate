import React from "react";
import { useParams } from "react-router-dom";

function PropertyDetail({data}) {
  
  const { propertyName } = useParams();
  const property = data.find((p) => p.name === propertyName);
  let propertyData;
 
  if (property) {
    propertyData = (
        <div className="card property-card shadow-sm m-3" data-aos="zoom-in">
        <div className="property-img-wrap">
            <img src={property.image} alt="luxury real estate property" className="img-fluid"/>
        </div>
           <div className="pl-3 pr-3 pt-4 pb-3">
               <h5>${property.price}</h5>
               <h3>{property.location}</h3>
               <div className="d-flex justify-content-between align-items-lg-baseline">
                   <p>{property.name}</p>
                   <button>here</button>
               </div>
           </div>
      </div>
    );
  } else {
    propertyData = <h2> Sorry. Product doesn't exist </h2>;
  }



  return <div>{propertyData}</div>;
}

export default PropertyDetail;
