import React from "react";
import { LoginInputs } from "./static/Inputs";
import "./login.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required").min(5),
});

function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitLogin = (data) => {
    //    console.log(data);
    document.getElementById("clearLogin").reset();
  };

  return (
    <div className="container">
      <div className="form-container d-flex justify-content-center">
        <div className="form-wrap shadow">
          <div className="form-title text-center">
            <h2>Log In</h2>
          </div>
          <form
            id="clearLogin"
            className="form"
            onSubmit={handleSubmit(onSubmitLogin)}
          >
            {LoginInputs.map((loginInput, key) => {
              return (
                <div key={key}>
                  <div className="wrap-input">
                    <input
                      type={loginInput.type}
                      name={loginInput.name}
                      placeholder={loginInput.placeholder}
                      className="input"
                      ref={register}
                    />
                    <span className="focus-input"></span>
                  </div>
                  <span className="d-block text-danger">
                    {errors[loginInput.name]?.message}
                  </span>
                </div>
              );
            })}

            <div className="btn-submit-wrap d-flex justify-content-center">
              <button type="submit" className="btn btnSubmit">
                Submit
              </button>
            </div>
          </form>

          <p>
            Don't have account?{" "}
            <NavLink to="/sign-up" className="pl-1">
              <b>Sign Up</b>
            </NavLink>
          </p>
          <p>
            <a href="#!"> Forgot your password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
