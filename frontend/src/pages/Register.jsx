import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../Component/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="login-form-container">
        <div className="fas fa-times" />
        <form onSubmit={onSubmit}>
          <h3>Register</h3>
          <span>Name</span>
          <input
            type="name"
            name="name"
            className="box"
            placeholder="Enter your name"
            value={name}
            onChange={onChange}
          />
          <span>Email</span>
          <input
            type="email"
            name="email"
            id="email"
            className="box"
            placeholder="enter your email"
            value={email}
            onChange={onChange}
          />
          <span>password</span>
          <input
            type="password"
            name="password"
            className="box"
            placeholder="enter your password"
            value={password}
            onChange={onChange}
          />
          <span>Confirm password</span>
          <input
            type="password"
            name="password2"
            className="box"
            placeholder="Confirm password "
            value={password2}
            onChange={onChange}
          />

          <button type="submit" defaultValue="sign in" className="btn">
            Submit
          </button>

          <p>
            Have an account ? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
