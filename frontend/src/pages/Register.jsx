import React from "react";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <>
      <div className="login-form-container">
        <div  className="fas fa-times" />
        <form action="">
          <h3>Register</h3>
          <span>Name</span>
          <input
            type="name"
            name=""
            className="box"
            placeholder="Enter your name"
           
          />
          <span>username</span>
          <input
            type="email"
            name=" "
            className="box"
            placeholder="enter your email"
            id=""
          />
          <span>password</span>
          <input
            type="password"
            name=""
            className="box"
            placeholder="enter your password"
            id=""
          />
          
          <input type="submit" defaultValue="sign in" className="btn" />
         
          <p>
            Have an account ? <Link to="/login" >Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
