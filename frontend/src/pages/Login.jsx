import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-form-container">
        <div  className="fas fa-times" />
        <form action="">
          <h3>Login</h3>
          <span>Email</span>
          <input
            type="email"
            name=""
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
            don't have an account ? <Link to="/register">create one</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
