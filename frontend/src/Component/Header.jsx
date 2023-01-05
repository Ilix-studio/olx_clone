import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="header-1">
          <Link to="/" className="logo">
            OLX
          </Link>
          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search" />
          </form>
          <div className="icons">
            <div id="search-btn" className="fas fa-search" />

            {user ? (
              <Link to="/upload">Upload</Link>
            ) : (
              <Link to="/register">Register</Link>
            )}

            {user ? (
              <Link to="/" className="logout" onClick={onLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
