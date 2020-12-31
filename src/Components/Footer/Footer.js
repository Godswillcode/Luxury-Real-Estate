import React from "react";
import "./footer.css";

const Footer = () => {
  const copyRightYear = new Date().getFullYear();
  return (
    <footer>
      {/* Footer top */}

      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
              <FooterChild>
                <div className="footer_content">
                  <h3>Get In Touch!</h3>
                  <p>
                    {" "}
                    <i className="fa fa-phone"></i>{" "}
                    <a href="tel: +234 907 895 89">+234 907 895 89</a>
                  </p>
                  <p>
                    {" "}
                    <i className="fa fa-map"></i> Km 20, Lekki-Epe Express Way,{" "}
                    <span> Oke-Ado, Sangotedo, Ajah, Lagos</span>{" "}
                  </p>
                  <p>
                    {" "}
                    <i className="fa fa-envelope"></i>{" "}
                    <a href="mailto: mallMart@gmail.com">luxury@gmail.com</a>
                  </p>
                </div>
              </FooterChild>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
              <FooterChild>
                <div className="footer_content">
                  <h3>Additional Resources</h3>
                  <ul>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <a href="!#">Schedule an inspection</a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <a href="!#">Careers</a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <a href="!#">Term and conditions</a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <a href="!#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </FooterChild>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
              <FooterChild>
                <div className="footer_content text-center">
                  <h3>About us</h3>
                  <p>
                    We offer you simplified, rewarding, and secure real estate
                    investing. We make real estate investments accessible to
                    everyone in a way that is simple, secure, and profitable
                  </p>
                  <p className="social-links mt-3">
                    <a href="!#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="!#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="!#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="!#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </p>
                </div>
              </FooterChild>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}

      <div className="text-center pt-4 pb-2 text-white footer_bottom">
        <div className="container">
          <p>
            {" "}
            &copy; {copyRightYear} All Right Reserved | Designed by{" "}
            <b>
              {" "}
              <a href="!#" className="text-white">
                Godswill Web Design.
              </a>
            </b>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Child component
function FooterChild({ children }) {
  return(
    <div className="d-flex justify-content-center">
       <div>{children}</div>;
    </div>
  )
  
 
}

export default Footer;
