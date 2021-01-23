import React from "react";
import { Button } from '../../Gbutton'

function Investment() {
  return (
    <div>
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Our Investment</h2>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row invest-content">
          <div className="col-lg-6">
            <div className="invest-content-wrap">
              <h3>Real Estate Investment</h3>
              <p>
                We invest in our portfolio of rented buildings in the US and
                manage your money for returns through rent and capital
                appreciation.
              </p>
                <p> <strong>Historical returns: 15% per annum Risk Level: Medium</strong></p>
                <Button href="#">Start Investing</Button>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="/images/services/investment-1.jpg"
              alt="investment"
              className="img-fluid"
            />
          </div>
        </div>

        {/* investment process */}
            <div className="invest-process-container">
              <div className="invest-process-title text-center">
                <h3>Our Real Estate Investment Process</h3>
              </div>

             <div className="invest-process">
          <div className="row">
              <div className="col-lg-6 col-sm-6">
              <div className="desc-wrap">
              <p>We buy or rent high demand properties in the US below market value to ensure investments are profitable.</p>
            </div>
              </div>
               <div className="col-lg-6 col-sm-6">
               <div className="desc-wrap">
              <p>We rent out or sell those properties on the open US market and pay your returns.</p>
            </div>
               </div>
               <div className="col-lg-6 col-sm-6">
               <div className="desc-wrap">
              <p>Each property is divided into 10,000 investment units and priced at $10 each.</p>
            </div>
            </div>
            <div className="col-lg-6 col-sm-6">
            <div className="desc-wrap">
              <p>Our US properties are insured against loss, damage and loss of rental income.</p>
            </div>
            </div>
            <div className="col-lg-6">
            <div className="desc-wrap">
              <p>The rental and maintenance of the properties are handled by carefully selected property managers so you never have to worry about the safety of your investment.</p>
            </div>
            </div>
          </div>
             </div>
            
          </div>
        </div>
            </div>
  );
}

export default Investment;
