import React from "react";
import Logo from "./img/icons/header_logo.svg";

const Header = (props) => {
  return (
    <>
      <div className="headerX">
        <a href="/react-money-goals-app" className="logo-container">
          <div className="circle">
            <img style={{ height: "100px", width: "100px" }} src={Logo} alt="" />
          </div>
          <h1>
            Money Goals <span className="blue-text">App</span>
          </h1>
        </a>
        <nav className="nav-wrapper">
          <a href="/react-money-goals-app">Home</a>
          <a href="/react-money-goals-app/about">About</a>
        </nav>
      </div >
    </>
  );
};

export default Header;
