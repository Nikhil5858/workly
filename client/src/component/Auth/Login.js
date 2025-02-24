import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="registermain">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="card-title text-center mb-4">Sign In</h2>
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-dark">
                Next
              </button>
            </div>

            <div className="text-center">
              <p className="login-footer">
                Don't have an account? <Link to="/register">Create an Account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;