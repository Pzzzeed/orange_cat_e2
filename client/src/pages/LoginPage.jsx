import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";
import "../assets/styles/login.css"
// import usePasswordToggle from "../../Hooks/usePasswordToggle";


// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <section>
    <div className="form-box">
      <div className="form-value">
        <form action="">
          <h2>Login</h2>
          <div className="inputbox">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email" required="required" />
          </div>
          <div className="inputbox">
          <FontAwesomeIcon icon={faKey} />
            <input type="password" placeholder="Password" required="required" />
          </div>
          <div className="forget">
            <label htmlFor="">
              <input type="checkbox" />Remember Me<a href="#">Forget Password</a>
            </label>
          </div>
          <button>Sign in</button>
          <div className="text-con">
              <p>or continue with</p>
          </div>
        </form>
        <div className="social">
          <div className="social1">
           <a href=""><FaGoogle /></a>
          </div>
          <div className="social2">
           <a href=""><FaInstagram /></a>
          </div>
          <div className="social3">
           <a href=""><FaFacebook/></a>
          </div>
        </div>
        <div className="footer">
          <p>Dont have an account yet?</p>
          <a href="">Register for free</a>
        </div>
      </div>
    </div>
    <div className="body-cat">
        <img src="./Body Cat1.png" alt="" />
    </div>
    </section>
  )
};

export default LoginPage;
