import React from 'react';
import '../../Footer/footer.css';
import './Contact.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  contactName: yup.string().required('Name is required').matches(/^([^0-9]*)$/, "number not allowed"),
  contactPhone: yup.string().required('Phone is required').matches(/^\d+$/, 'alphabet not allowed'),
  contactEmail: yup.string().required('Email is required').email('Please enter a valid email'),
  contactSubject: yup.string().required('Subject is required'),
  contactMessage: yup.string().required('Message is required')
});


function Contact() {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema), 
 });
 const onSubmitForm = (data) => {
  //  console.log(data);
   document.getElementById('clearInput').reset()
 }
    return (
        <div>
            <div className="banner d-flex justify-content-center text-center">
        <div className="banner-content">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="container">
           <div className="contact-wrap">
           <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                  <h2>REACH US</h2>
                 <div className="row">
                     <div className="col-lg-6">
                       <h4>Address:</h4>
                        
                        <span>Suite 18/18A, Sky Mall,</span>
                       <span>Km 27, Lekki-Epe Expressway,</span>
                       <span>Lagos.</span>
                        <h4 className="pt-3">Connect with us</h4>
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
                     <div className="col-lg-6">
                           <div className="contact-link">
                           <h4>Phone:</h4>
                          <a href="tel:09038968345" className="d-block">+234 903 896 8345</a>
                          <a href="tel:09038968345">+234 903 896 8345</a>
                         </div>
                         <div className="pt-4 contact-link">
                               <h4>Email:</h4>
                                <a href="mailto:info@luxuryrealtor.com" className="d-block">info@luxuryrealtor.com</a>
                                <a href="mailto:info@luxuryrealtor.com" className="d-block">info@luxuryrealtor.com</a>
                           </div>
                           </div>
                           
                 </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h2>SEND US A MESSAGE</h2>
                  <form id="clearInput" onSubmit={handleSubmit(onSubmitForm)}>
                  <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" name="contactName" ref={register} placeholder="Full Name"/>
                          <span className="text-danger d-block text-center">{errors['contactName']?.message}</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                        <input type="text" name="contactPhone" className="form-control" ref={register} placeholder="Phone"/>
                        <span className="text-danger d-block text-center">{errors['contactPhone']?.message}</span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                       <div className="form-group">
                       <input type="email" name="contactEmail" className="form-control" ref={register} placeholder="Email"/>
                       <span className="text-danger d-block text-center">{errors['contactEmail']?.message}</span>
                       </div>
                      </div>
                      <div className="col-lg-6">
                       <div className="form-group">
                       <input type="text" name="contactSubject" className="form-control" ref={register} placeholder="Subject"/>
                       <span className="text-danger d-block text-center">{errors['contactSubject']?.message}</span>
                       </div>
                      </div>
                      <div className="col-lg-12 col-sm-12 col-md-12">
                      <div className="form-group">
                      <textarea className="form-control" placeholder="Message"
                        name="contactMessage" ref={register}></textarea>
                        <span className="text-danger d-block text-center">{errors['contactMessage']?.message}</span>
                    </div>
                      </div>
                  </div>
                     <button type="submit" className="btn btn-primary btn-block">Submit</button>
                  </form>
              </div>
          </div>
           </div>
      </div>
        </div>
    )
}

export default Contact
