import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="navbar">
            <div className="logoBox">
            OLX 
            </div>
         
          <div className="search_box">
            <input
              type="text"
              className="searchclass"
              id="searchid"
              placeholder="What you are looking for ?"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
