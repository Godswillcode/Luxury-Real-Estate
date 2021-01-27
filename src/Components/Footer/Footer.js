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
                    <a href="tel:09038968345">+234 903 896 8345</a>
                  </p>
                  <p>
                    {" "}
                    <i className="fa fa-map"></i> Suite, 18/18A, sky Mall,{" "}
                    <span>Km 27, Lekki-Epe Expressway Lagos</span>{" "}
                  </p>
                  <p>
                    {" "}
                    <i className="fa fa-envelope"></i>{" "}
                    <a href="mailto: info@luxuryrealtor.com">info@luxuryrealtor.com</a>
                  </p>
                </div>
              </FooterChild>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
              <FooterChild>
                <div className="footer_content">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <a href="#!">Career</a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <a href="#!">Support</a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <a href="#!">Term and conditions</a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <a href="#!">Privacy policy</a>
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
                  A good real estate agent doesn’t just sell properties they sell themselves. It’s important to show your real personality. People will respond to you if you have a great attitude.
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
