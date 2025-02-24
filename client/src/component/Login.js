import React from "react";
import "../assets/css/Auth.css"; 
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Sign In</h2>
        <form className="login-form">

            <div className="form-floating mb-3 mt-2">
              <input type="email" className="form-control" id="email" placeholder=""/>
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" placeholder=""/>
              <label htmlFor="floatingInput">Password</label>
            </div>  

            <div className="d-grid">
              <button type="submit" className="btn btn-dark"> Next </button>
            </div>

            <div className="login-footer">
              <p>
                Don't have an account ? <Link to={'register'}> Create an Account</Link>
              </p>
            </div>
        
        </form>
      </div>
    </div>
  );
}

export default Login;