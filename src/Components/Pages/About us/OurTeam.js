import React from "react";
import "./ourTeam.css";

const OurTeam = () => {
  return (
    <div className="ourTeam">
      <div className="container">
        <div className="section-header">
          <h2>Our Team</h2>
          <p>Meet our awesome members</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <OurTeamItem
              image="images/team/team-1.jpg"
              name="Mr Musty"
              title="Developer"
            />
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <OurTeamItem
              image="images/team/team-2.jpg"
              name="Miss Pamela"
              title="Designer"
            />
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <OurTeamItem
              image="images/team/team-3.jpg"
              name="Bro GodsWill"
              title="Designer"
            />
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <OurTeamItem
              image="images/team/team-4.jpg"
              name="Miss Florence"
              title="C E O"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ChildComponent

const OurTeamItem = ({ image, name, title }) => {
  return (
    <div className="member">
      <img src={image} alt="luxury real estate team" className="img-fluid" />
      <div className="member-info">
        <div className="member-info-content">
          <h4>{name}</h4>
          <span>{title}</span>
        </div>
        <div className="social">
          <a href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#!">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#!">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
