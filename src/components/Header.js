import React from "react";
import Logo from "./img/icons/header_logo.svg";
import { HashRouter as Router, Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <Router>
      <>
        <div className="headerX">
          <Link to="/"><div className="logo-container">
            <div className="circle">
              <img style={{ height: "100px", width: "100px" }} src={Logo} alt="" />
            </div>
            <h1>
              Money Goals <span className="blue-text">App</span>
            </h1>
          </div></Link>
          <nav className="nav-wrapper">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div >
      </>
    </Router>
  );
};

export default Header;
