import React from "react";
import { useState } from "react";
import "../../assets/css/Auth.css"; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

function Register() {
    const [step,setStep] = useState(1);
    const [formData,setFormData] = useState(
        {
            email : "",
            password : "",
            username : "",
            otp : ""        
        }
    );
    
    const handelNext = () =>{
        setStep((prevStep)=>prevStep + 1)
    }
    
    const handelPrevious = () =>{
        setStep((prevStep)=>prevStep - 1)
    }
    
    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        
    }
    
    const handelChnage = (e) =>{
        const {id,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [id]:value,
        }));
    };
    
    return (
        <>
    <div className="registermain">
      <div className="login-container">
      <div className="login-card">
        {
            step > 1 && (
                <button className="btn btn-outline-dark d-flex justify-content-start" onClick={handelPrevious}>
                    <i className="bi bi-arrow-left"></i>
                </button>
            )
        }        
        <h2 className="login-title">Sign Up</h2>


        {
            step === 1 && (
                
                <form className="login-form" onSubmit={handelNext}>
                    <h2 className="login-title">Create a new account</h2>
                    <div className="form-floating">
                    <input type="email" id="email" value={formData.email} onChange={handelChnage} className="form-control" required placeholder=""/>
                    <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                    <input type="password" onChange={handelChnage} value={formData.password} className="form-control" id="password" required placeholder=""/>
                    <label htmlFor="floatingInput">Password</label>
                    </div>  

                    <div className="d-grid">
                    <button type="submit" className="btn btn-dark"> Continue </button>
                    </div>
                </form>
            )
        }

        {
            step === 2 && (
                <form className="login-form" onSubmit={handelNext}>
                    <h2 className="login-title">Choose a username</h2>

                    <div className="form-floating mb-3">
                    <input type="text" onChange={handelChnage} value={formData.username} className="form-control" id="username" required placeholder=""/>
                    <label htmlFor="floatingInput">Username</label>
                    </div>  

                    <div className="d-grid">
                    <button type="submit" className="btn btn-dark"> Next </button>
                    </div>
                </form>
            )
        }

        {
            step === 3 &&(
                <form className="login-form" onSubmit={handelNext}>
                    <h2 className="login-title">Confirm your email</h2>

                    <div className="form-floating mb-3">
                    <input type="number" onChange={handelChnage} value={formData.otp} className="form-control" id="otp" required placeholder=""/>
                    <label htmlFor="floatingInput">Enter otp</label>
                    </div>  

                    <div className="d-grid">
                    <button type="submit" onClick={handelSubmit} className="btn btn-dark"> Submit </button>
                    </div>
                </form>
            )
        }


        <div className="login-footer">
            <p>
            Already have an account ? <Link to={'/login'} replace> Login</Link>
            </p>
        </div>

      </div>
    </div>
    </div>
    </>
  );
}

export default Register;
