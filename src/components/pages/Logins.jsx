import React from "react";
import "./Logins.css";
import logo from "../../images/logo1.png";

const Logins = () => {
  return (
    <div className="login-container ">
      <div className="login-box">
        {/* Company Branding */}
        <div className="login-header">
          <img
            src={logo} // replace with Traxo India logo
            alt="Traxo India Logo"
            className="login-logo w-24"
          />
         
          <p className="login-subtitle">
            Welcome back! Please log in to access your dashboard and manage GPS & IoT solutions.
          </p>
        </div>

        {/* Login Form */}
        <form className="form">
          <div className="user-box">
            <input className="input" type="text" required />
            <label className="label">Username</label>
          </div>

          <div className="user-box">
            <input className="input" type="password" required />
            <label className="label">Password</label>
          </div>

          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>

        {/* Footer Links */}
        <div className="login-footer">
          <p>
            New to Traxo? <a href="#">Create an account</a>
          </p>
          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logins;
