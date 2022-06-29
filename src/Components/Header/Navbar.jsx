import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [phoneSize, setPhoneSize] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container ">
          <div className="categories">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              {" "}
              Categories <i className="fa fa-cheveron-down"></i>
            </h4>
          </div>
          <div className="navlink navdiv">
            <ul
              className={
                phoneSize ? "nav-links-phoneMenu" : "link flex  captilize"
              }
              onClick={() => setPhoneSize(false)}
            >
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/pages"> Pages </Link>
              </li>
              <li>
                <Link to="/user"> User Account </Link>
              </li>
              <li>
                <Link to="/vendor"> Vendor Account </Link>
              </li>
              <li>
                <Link to="/track"> Track my Order </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
            <button
              className="toggle-btn"
              onClick={() => setPhoneSize(!phoneSize)}
            >
              {phoneSize ? (
                <i className=" fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
