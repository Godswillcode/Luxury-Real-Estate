import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
import { SignUpInputs } from "./static/Inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required").min(5),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null, "Password must match"]),
});

function SignUp() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitSignUp = (data) => {
    //    console.log(data);
    document.getElementById("clearSignUp").reset();
  };
  return (
    <div className="container">
      <div className="form-container d-flex justify-content-center">
        <div className="form-wrap shadow">
          <div className="form-title text-center">
            <h2>Create Account</h2>
          </div>
          <form
            id="clearSignUp"
            className="form"
            onSubmit={handleSubmit(onSubmitSignUp)}
          >
            {SignUpInputs.map((signUpInput, key) => {
              return (
                <div key={key}>
                  <div className="wrap-input">
                    <input
                      type={signUpInput.type}
                      name={signUpInput.name}
                      placeholder={signUpInput.placeholder}
                      className="input"
                      ref={register}
                    />
                    <span className="focus-input"></span>
                  </div>
                  <span className="d-block text-danger">
                    {errors[signUpInput.name]?.message}
                  </span>
                </div>
              );
            })}
            <div className="form-check text-left ml-3 pt-3">
              <input
                type="checkbox"
                name="termsYes"
                className="form-check-input"
                required
              />
              <label className="form-check-label">
                Accept the terms of use &amp; private policy
              </label>
            </div>
            <div className="btn-submit-wrap d-flex justify-content-center">
              <button type="submit" className="btn btnSubmit">
                Submit
              </button>
            </div>
          </form>

          <p>
            Have an account already?{" "}
            <NavLink to="/logIn" className="pl-1">
              <b>Log-In</b>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
