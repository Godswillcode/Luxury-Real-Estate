import React, { useEffect } from "react";
import "./project.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <div className="project">
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Our Featured Projects</h2>
        </div>
      </div>

      <div className="container">
        <div className="project-content">
          <h2>
            Our Best <span>PROJECTS</span>{" "}
          </h2>
          <p>
            Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          </p>
          <p>
            Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          </p>
        </div>

        {/* <div className=" d-flex justify-content-between projectItem-wrap">
          {projectData.map((item) => (
            <ProjectItem {...item} key={item.id} />
          ))}
        </div> */}

       {/* <div className="d-flex justify-content-between projectItem-wrap">
       <ProjectItem projectData={projectData}/>
       </div> */}

      </div>
    </div>
  );
};

export default Project;
