import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
     <header className="header">
        <div className="header-1">
          <Link to=""  className="logo">
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
            <Link to="/login" >Login</Link>
           
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
