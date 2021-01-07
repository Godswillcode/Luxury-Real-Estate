import React from 'react'
import './PropertyItem.css'
import { Button } from '../../Gbutton'
import { Link, useRouteMatch } from 'react-router-dom'


function PropertyItem() {
    const { url } = useRouteMatch() 

    const projectList = propertyData.map(property => {
        const { image, price, location, name, id } = property
      return(
        <div className="card property-card shadow-sm m-3" key={id}>
        <div className="property-img-wrap">
            <img src={image} alt="luxury real estate property" className="img-fluid"/>
        </div>
           <div className="pl-3 pr-3 pt-4 pb-3">
               <h5>${price}</h5>
               <h3>{location}</h3>
               <div className="d-flex justify-content-between align-items-lg-baseline">
                   <p>{name}</p>
                   <Button btn_sm='true' as={Link} to={`${url}/${name}`}>Details</Button>
               </div>
           </div>
      </div>
      )
    })

    return(
    <div>{projectList}</div> 
    )
}

export default PropertyItem
