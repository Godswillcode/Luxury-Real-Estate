import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetail({data}) {
    console.log(data);
  const { projectName } = useParams();
  const project = data.find((p) => p.name === projectName);
  let projectData;
 
  if (project) {
    projectData = (
        <div className="card project-card shadow-sm m-3" data-aos="zoom-in">
        <div className="project-img-wrap">
            <img src={project.image} alt="luxury real estate project" className="img-fluid"/>
        </div>
           <div className="pl-3 pr-3 pt-4 pb-3">
               <h5>${project.price}</h5>
               <h3>{project.location}</h3>
               <div className="d-flex justify-content-between align-items-lg-baseline">
                   <p>{project.name}</p>
                   <button>here</button>
               </div>
           </div>
      </div>
    );
  } else {
    projectData = <h2> Sorry. Product doesn't exist </h2>;
  }



  return <div>{projectData}</div>;
}

export default ProjectDetail;
