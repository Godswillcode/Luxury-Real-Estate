import React from "react";
import "./features.css";
import { Tab, Tabs } from "react-bootstrap";

const Features = () => {
  return (
    <div className="features mb-5">
      <div className="container container-sm">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
            <FeatureItem>
              <h3>Why Choose Us?</h3>
              <p>
                A good real estate agent doesn’t just sell properties they sell
                themselves. It’s important to show your real personality. People
                will respond to you if you have a great attitude, are personable
                and honest.
              </p>
              <p>
                Having a desire to control your own professional destiny and be
                your own boss is a trait shared by top real estate
                professionals.
              </p>
            </FeatureItem>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
            <FeatureItem>
              <h3>Our Vision</h3>
              <p>To become the leading real estate company in Africa proving world class real estate services that meet our client needs at all times</p>
              <p> <b>Our Mission</b> we exist to provide world class services in the area of our core competences that leave our clients happy and thoroughly.</p>
            </FeatureItem>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 Tab">
            <FeatureItem>
              <h3>Our Features</h3>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Trust worthy">
                  <p>
                    Do you enjoy coming up with creative solutions to problems
                    or issues? Many successful real estate agents know how to
                    properly showcase a house to make it more marketable and
                    develop creative MLS listings to attract the right buyers.
                  </p>
                </Tab>
                <Tab eventKey="profile" title="Honesty">
                  <p>
                    Your professional reputation is crucial to a long and
                    successful career in real estate. Becoming a member of the
                    National Association of REALTORS® is one way to show you
                    practice high ethical standards. To become a member.
                  </p>
                </Tab>
                <Tab eventKey="contact" title="Attention">
                  <p>
                    Paying close attention to the details is imperative for your
                    real estate career. A complete real estate agent is
                    attentive to the unique needs of their individual clients.
                    If you are organized, follow up with leads, communicate
                    well.
                  </p>
                </Tab>
              </Tabs>
            </FeatureItem>
          </div>
        </div>
      </div>
    </div>
  );
};

// ChildComponent

const FeatureItem = ({ children }) => {
  return <div>{children}</div>;
};

export default Features;
