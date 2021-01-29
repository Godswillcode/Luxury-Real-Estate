import React, { useEffect, useRef, useState } from "react";
import "./Faq.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Faq() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const questions = [
    {
      id: 1,
      title: "Who is Luxury?",
      info:
        "Luxury real estate is a Pan African real estate company with a knack to continuously innovate in the entire real estate value chain thereby making it easy and accessible to everyone craving to patronize it.",
    },
    {
      id: 2,
      title: "Where are your properties located?",
      info:
        "Our properties are located in Abuja, Lagos, Delta, Anambra, Imo, Enugu and still counting",
    },
    {
      id: 3,
      title: "What title does your properties have?",
      info:
        "It all varies from property to property. The legal or equitable title of the properties ranges from deed of assignment to governor's consent.",
    },
    {
      id: 4,
      title: "Where and how do i make payment?",
      info:
        "All cash payments should be made to Luxury real estate designated bank(s) details. Otherwise, cheque(s) should be issued in favour of Luxury real estate . We shall not accept any responsibility for any liability that may arise, as result of deviation from the above condition.",
    },
  ];

  return (
    <>
      <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Our Faqs</h2>
        </div>
      </div>
      <div className="faq_container bg-white mb-5 mt-3">
        <div className="row faq_content_wrap" data-aos="zoom-in">
          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="faq_content">
              <h1>Frequently Asked Questions About Us</h1>
              <p>
                Looking for more information? Our database of Frequently Asked
                Questions is filled with a lot of answers to the most pressing
                inquiries.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-5">
            <div className="faq_img_wrap">
              <img
                src="images/faq.png"
                alt="aimart real estate"
                className="img-fluid ml-3"
              />
            </div>
          </div>
        </div>
        {questions.map((question) => (
          <FaqChild {...question} key={question.id} />
        ))}
      </div>
    </>
  );
}

// Child component
function FaqChild({ title, info }) {
  const [open, setOpen] = useState(false);

  const parentRef = useRef();
  return (
    <div className="accordion_wrap">
      <div
        className="d-flex justify-content-between content_header"
        onClick={() => setOpen(!open)}
      >
        <div className="d-flex justify-content-between">
          <span className="letter pr-4">
            <i className="far fa-question-circle" />
          </span>
          <h3>{title}</h3>
        </div>

        <div className="toGGle">
          <i
            className={
              open ? "fas fa-chevron-circle-up" : "fas fa-chevron-circle-down"
            }
          ></i>
        </div>
      </div>

      <div
        className="content"
        ref={parentRef}
        style={
          open
            ? { height: parentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="d-flex justify-content-start info_wrap">
          <span className="letter text-dark mb-2 pr-4">A.</span>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
