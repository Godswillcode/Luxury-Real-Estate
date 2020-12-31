import React from 'react'
import './ProjectItem.css'
import { Button } from '../../Gbutton'
import { Link, useRouteMatch } from 'react-router-dom'


function ProjectItem({projectData}) {
    // console.table(projectData);
    const { url } = useRouteMatch() 

    const projectList = projectData.map(project => {
        const { image, price, location, name, id } = project
      return(
        <div className="card project-card shadow-sm m-3" key={id}>
        <div className="project-img-wrap">
            <img src={image} alt="luxury real estate project" className="img-fluid"/>
        </div>
           <div className="pl-3 pr-3 pt-4 pb-3">
               <h5>${price}</h5>
               <h3>{location}</h3>
               <div className="d-flex justify-content-between align-items-lg-baseline">
                   <p>{name}</p>
                   <Button btn_sm='true' as={Link} to={`${url}/${name}`}>Detail</Button>
               </div>
           </div>
      </div>
      )
    })

    return(
    <div>{projectList}</div> 
    )
}

export default ProjectItem
