import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../Component/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
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

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="login-form-container">
        <div className="fas fa-times" />
        <form onSubmit={onSubmit}>
          <h3>Login</h3>
          <span>Email</span>
          <input
            type="email"
            name="email"
            className="box"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
            id=""
          />
          <span>password</span>
          <input
            type="password"
            name="password"
            className="box"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
            id=""
          />

          <button type="submit" defaultValue="sign in" className="btn">
            Submit
          </button>

          <p>
            don't have an account ? <Link to="/register">create one</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
